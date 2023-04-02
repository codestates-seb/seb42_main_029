package com.k5.modudogcat.domain.order.service;

import com.k5.modudogcat.domain.cart.entity.Cart;
import com.k5.modudogcat.domain.cart.service.CartService;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.entity.OrderProduct;
import com.k5.modudogcat.domain.order.repository.OrderRepository;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.repository.ProductRepository;
import com.k5.modudogcat.domain.product.service.ProductService;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final ProductService productService;
    private final CartService cartService;
    @Transactional
    public Order createOrder(Order order){
        // NOTE : (회원이 계속 뒤로가기를 눌러서) 주문이 무한적으로 생성되는것을 막을 방법을 고민해보자.
        List<OrderProduct> orderProductList = stockMinusCount(order);
        order.setOrderProductList(orderProductList);
        Order savedOrder = orderRepository.save(order);
        emptyCart(savedOrder.getUser().getUserId());
        return savedOrder;
    }
    private List<OrderProduct> stockMinusCount(Order order){
        List<OrderProduct> orderProductList = order.getOrderProductList().stream()
                .map(orderProduct -> {
                    Product product = productService.findProduct(orderProduct.getProduct().getProductId());
                    long updatedStock = product.getStock() - orderProduct.getProductsCount();
                    product.setStock(updatedStock);
                    orderProduct.setProduct(product);
                    return orderProduct;
                })
                .collect(Collectors.toList());
        return orderProductList;
    }
    public Order updateOrder(Order order, Long userId){
        Long orderId = order.getOrderId();
        Order findOrder = findVerifiedOrderById(orderId);
        verifyCorrectUser(orderId, userId);

        Optional.ofNullable(order.getReceiver())
                .ifPresent(newReceiver -> findOrder.setReceiver(newReceiver));
        Optional.ofNullable(order.getPhone())
                .ifPresent(newPhone -> findOrder.setPhone(newPhone));
        Optional.ofNullable(order.getReceivingAddress())
                .ifPresent(newAddress -> findOrder.setReceivingAddress(newAddress));
        // todo : 상품의 개수 수정시 리팩토링 필요

        return orderRepository.save(findOrder);
    }
    public Order findOrder(Long orderId, Long userId){
        Order findOrder = findVerifiedOrderById(orderId);
        verifyCorrectUser(orderId, userId);

        return findOrder;
    }

    public Order findVerifiedOrderById(Long orderId){
        Order findOrder = orderRepository.findById(orderId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND);
                });
        verifiedActiveOrder(findOrder);
        return findOrder;
    }

    public Page<Order> findBuyerOrders(Pageable pageable, Long userId){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());
        Page<Order> findOrders = orderRepository.findAllByOrderStatusNotLikeAndUserUserId(Order.OrderStatus.ORDER_DELETE, userId, of);

        return findOrders;
    }

    public void removeOrder(Long orderId, Long userId){
        Order findOrder = findVerifiedOrderById(orderId);
        verifiedActiveOrder(findOrder);
        verifyCorrectUser(orderId, userId);

        findOrder.setOrderStatus(Order.OrderStatus.ORDER_DELETE);
        orderRepository.save(findOrder);
    }
    
    public void verifiedActiveOrder(Order findOrder){
        if(findOrder.getOrderStatus().getStatus().equals("삭제된주문")) {
            throw new BusinessLogicException(ExceptionCode.REMOVED_ORDER);
        }
    }

    public void verifyCorrectUser(Long orderId, Long LoginUserId){
        Order findOrder = findVerifiedOrderById(orderId);
        Long dbUserId = findOrder.getUser().getUserId();
        if(LoginUserId != dbUserId){
            throw new BusinessLogicException(ExceptionCode.NOT_ALLOWED_USER);
        }
    }

    private void emptyCart(Long userId){
        cartService.removeCartProductsByCartId(userId);
    }
}
