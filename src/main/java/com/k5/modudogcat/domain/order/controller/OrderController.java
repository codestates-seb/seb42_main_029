package com.k5.modudogcat.domain.order.controller;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.mapper.OrderMapper;
import com.k5.modudogcat.domain.order.service.OrderService;
import com.k5.modudogcat.dto.SingleResponseDto;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/orders")
@RequiredArgsConstructor
public class OrderController {
    private final OrderMapper mapper;
    private final OrderService orderService;
    private static final String ORDER_DEFAULT_URL = "/orders/";
    @PostMapping
    public ResponseEntity postOrder(@RequestBody OrderDto.Post postDto){
        long userId = Long.parseLong((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
        postDto.setUserId(userId);
        Order order = mapper.orderPostToOrder(postDto);
        Order findOrder = orderService.createOrder(order);
        Long orderId = findOrder.getOrderId();
        URI location = UriCreator.createUri(ORDER_DEFAULT_URL, orderId);

        return ResponseEntity.created(location).build();
    }
    @PatchMapping("/{order-id}")
    public ResponseEntity patchUser(@PathVariable("order-id") Long orderId,
                                    @RequestBody OrderDto.Patch patchDto){
        patchDto.setOrderId(orderId);
        Order order = mapper.orderPatchToOrder(patchDto);
        Order updateOrder = orderService.updateOrder(order);
        OrderDto.Response response = mapper.orderToOrderResponse(updateOrder);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }


}
