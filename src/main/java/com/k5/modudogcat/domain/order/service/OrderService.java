package com.k5.modudogcat.domain.order.service;

import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public Order createOrder(Order order){
        // todo : 주문이 무한적으로 생성되는것을 막을 방법을 고민해보자.
        return orderRepository.save(order);
    }
}
