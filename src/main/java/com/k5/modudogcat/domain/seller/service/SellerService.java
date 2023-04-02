package com.k5.modudogcat.domain.seller.service;

import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.repository.OrderRepository;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.repository.ProductRepository;
import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.seller.repository.SellerRepository;
import com.k5.modudogcat.domain.user.entity.User;
import com.k5.modudogcat.domain.user.repository.UserRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SellerService {

    private final SellerRepository sellerRepository;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    private final ProductRepository productRepository;

    private final OrderRepository orderRepository;

    public Seller createSeller(Seller seller) {
        verifiedByLoginId(seller);
        verifiedByregistrationNumber(seller);
        setEncodedPassword(seller);

        return sellerRepository.save(seller);

    }

    public Seller updateSeller(Seller seller) {
        Long sellerId = seller.getSellerId();
        Seller findSeller = findVerifiedSellerById(sellerId);

        Optional.ofNullable(seller.getAddress())
                .ifPresent(newAddress -> findSeller.setAddress(newAddress));
        Optional.ofNullable(seller.getPhone())
                .ifPresent(newPhone -> findSeller.setPhone(newPhone));
        Optional.ofNullable(seller.getEmail())
                .ifPresent(newEmail -> findSeller.setEmail(newEmail));

        return sellerRepository.save(findSeller);

    }

    //패스워드 암호화
    private void setEncodedPassword(Seller seller) {
        seller.setPassword(passwordEncoder.encode(seller.getPassword()));
    }

    //로그인 ID 검증
    private void verifiedByLoginId(Seller seller) {
        String loginId = seller.getLoginId();
        Optional<User> optionalSeller = userRepository.findByLoginId(loginId);
        optionalSeller.ifPresent(sell -> {
            throw new BusinessLogicException(ExceptionCode.USER_LOGIN_ID_EXISTS);
        });
    }

    //사업자등록번호 존재 여부 검증
    private void verifiedByregistrationNumber(Seller seller) {
        String registrationNumber = seller.getRegistrationNumber();
        Optional<Seller> optionalSeller = sellerRepository.findByRegistrationNumber(registrationNumber);
        optionalSeller.ifPresent(r -> {
            throw new BusinessLogicException(ExceptionCode.SELLER_REGISTRATION_NUMBER_EXISTS);
        });
    }

    //존재하는 판매자 여부 검증
    public Seller findVerifiedSellerById(Long sellerId) {
        Seller findSeller = sellerRepository.findById(sellerId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.SELLER_NOT_FOUND);
                });
        verifiedApprovedSeller(findSeller);
        return findSeller;
    }

    //판매자 상태 검증
    public void verifiedApprovedSeller(Seller findSeller) {
        if(findSeller.getSellerStatus().getStatus().equals("가입 거절")) {
            throw new BusinessLogicException(ExceptionCode.SELLER_REJECTED);
        } else if(findSeller.getSellerStatus().getStatus().equals("승인 대기 중")) {
            throw new BusinessLogicException(ExceptionCode.SELLER_WAITING);
        }
    }

    //sellerId 가져오기
    public Long findSellerIdById(Long userId) {
        Optional<User> user= userRepository.findById(userId);
        Long sellerId = user.get().getSeller().getSellerId();
        return sellerId;
    }

    //sellerId가 일치하고 상품 상태가 delete가 아닌 애들만 가져오기
    public Page<Product> findProducts(Pageable pageable, Long sellerId) {
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());
        Page<Product> products = productRepository.findAllBySellerSellerIdAndProductStatusNotLike(sellerId, Product.ProductStatus.PRODUCT_DELETE, of);

        return products;
    }

    public void removeProduct(Long productId, Long sellerId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
        if ( product.getProductStatus().getStatus().equals("삭제된상품")) {
            throw new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND);}
        if( product.getSeller().getSellerId() != sellerId) {
            throw new BusinessLogicException(ExceptionCode.SELLER_NOT_ALLOWED);
        }
        product.setProductStatus(Product.ProductStatus.PRODUCT_DELETE);
        productRepository.save(product);
    }

    //sellerId가 일치하고, ORDER_DELETE가 아닌 주문들 가지고 오기
    public Page<Order> findOrders(Pageable pageable, Long sellerId) {
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());
        Page<Order> orders = orderRepository.findAllByOrderStatusNotLikeAndUserUserId(Order.OrderStatus.ORDER_DELETE, sellerId, of);
        return orders;
    }

    public Order findOrderStatus(Long orderId, Order.OrderStatus orderStatus) {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));
        verifiedOrderStatus(order, orderStatus);
        return order;
        }


//    public Order findOrder(Long sellerId, Order order, Order.OrderStatus orderStatus) {
//        //주문의 판매자 id, 로그인한 판매자 id 검증
//        if(order.getSeller().getSellerId() != sellerId) {
//            throw new BusinessLogicException(ExceptionCode.SELLER_NOT_ALLOWED);}
//        //디비에 추가
//        order.setOrderStatus(orderStatus);
//        return orderRepository.save(order);
//    }

    //결제 상태 변경 시 검증
    private void verifiedOrderStatus(Order order, Order.OrderStatus orderStatus) {
        String verifiedOrderStatus = order.getOrderStatus().getStatus();
        if (verifiedOrderStatus.equals("결제완료")) {
            if (orderStatus.getStatus().equals("결제대기")) {
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}
        } else if (Objects.equals(verifiedOrderStatus, "배송 준비 중")){
                if(orderStatus.getStatus().equals("결제대기") || orderStatus.getStatus().equals("결제완료")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}
        } else if (verifiedOrderStatus.equals("배송 준비 중")){
            if(orderStatus.getStatus().equals("결제대기") || orderStatus.getStatus().equals("결제완료")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}
        } else if (verifiedOrderStatus.equals("배송 중")){
            if(orderStatus.getStatus().equals("결제대기") || orderStatus.getStatus().equals("결제완료")
            || orderStatus.getStatus().equals("배송 준비 중")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}
        } else if (verifiedOrderStatus.equals("배송 완료")){
            if(orderStatus.getStatus().equals("결제대기") || orderStatus.getStatus().equals("결제완료")
                    || orderStatus.getStatus().equals("배송 준비 중") || orderStatus.getStatus().equals("배송 중")){
                throw new BusinessLogicException(ExceptionCode.COMPLETED_ORDER);}
        }
    }
}