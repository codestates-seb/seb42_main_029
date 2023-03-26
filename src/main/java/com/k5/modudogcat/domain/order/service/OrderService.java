package com.k5.modudogcat.domain.order.service;

import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.repository.OrderRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

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
    
    public void verifiedActiveOrder(Order findOrder){
        // todo: Active만 되도록 구현
    }
}
