package com.k5.modudogcat.domain.order.controller;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.mapper.OrderMapper;
import com.k5.modudogcat.domain.order.service.OrderService;
import com.k5.modudogcat.domain.user.entity.User;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderMapper mapper;
    private final OrderService orderService;
    private static String ORDER_DEFAULT_URL = "/orders/";
    @PostMapping
    public ResponseEntity postOrder(@RequestBody OrderDto.Post postDto){
        Order order = mapper.orderPostToOrder(postDto);
        Order findOrder = orderService.createOrder(order);

        Long orderId = findOrder.getOrderId();
        URI location = UriCreator.createUri(ORDER_DEFAULT_URL, orderId);

        return ResponseEntity.created(location).build();
    }
}
