package com.k5.modudogcat.domain.order.service;

import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.repository.OrderRepository;
import com.k5.modudogcat.domain.user.entity.User;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public Order createOrder(Order order){
        // todo : 주문이 무한적으로 생성되는것을 막을 방법을 고민해보자.
        return orderRepository.save(order);
    }
    public Order updateOrder(Order order){
        Long orderId = order.getOrderId();
        Order findOrder = findVerifiedOrderById(orderId);

        Optional.ofNullable(order.getReceiver())
                .ifPresent(newReceiver -> findOrder.setReceiver(newReceiver));
        Optional.ofNullable(order.getPhone())
                .ifPresent(newPhone -> findOrder.setPhone(newPhone));
        Optional.ofNullable(order.getReceivingAddress())
                .ifPresent(newAddress -> findOrder.setReceivingAddress(newAddress));
        Optional.ofNullable(order.getCount())
                .ifPresent(newCount -> findOrder.setCount(newCount));

        return orderRepository.save(findOrder);
    }
    public Order findVerifiedOrderById(Long orderId){
        Order findOrder = orderRepository.findById(orderId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND);
                });
        verifiedActiveOrder(findOrder);
        return findOrder;
    }

    public Page<Order> findOrders(Pageable pageable){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());
        List<Order> findOrders = orderRepository.findAllByOrderStatus(Order.OrderStatus.ORDER_ACTIVE);

        return new PageImpl<>(findOrders, of, findOrders.size());
    }

    public void removeOrder(Long orderId){
        Order findOrder = findVerifiedOrderById(orderId);
        verifiedActiveOrder(findOrder);

        findOrder.setOrderStatus(Order.OrderStatus.ORDER_DELETE);
        orderRepository.save(findOrder);
    }
    
    public void verifiedActiveOrder(Order findOrder){
        if(findOrder.getOrderStatus().getStatus().equals("삭제된주문")) {
            throw new BusinessLogicException(ExceptionCode.REMOVED_ORDER);
        }
    }
}
