package com.k5.modudogcat.domain.order.controller;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.mapper.OrderMapper;
import com.k5.modudogcat.domain.order.service.OrderService;
import com.k5.modudogcat.dto.MultiResponseDto;
import com.k5.modudogcat.dto.SingleResponseDto;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.net.URI;
import java.util.List;

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
    public ResponseEntity patchOrder(@PathVariable("order-id") Long orderId,
                                    @RequestBody OrderDto.Patch patchDto){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);

        patchDto.setOrderId(orderId);
        Order order = mapper.orderPatchToOrder(patchDto);
        Order updateOrder = orderService.updateOrder(order, userId);
        OrderDto.Response response = mapper.orderToOrderResponse(updateOrder);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/{order-id}")
    public ResponseEntity getOrder(@PathVariable("order-id") Long orderId){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);
        Order findOrder = orderService.findOrder(orderId, userId);
        OrderDto.Response response = mapper.orderToOrderResponse(findOrder);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity findOrders(Pageable pageable){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);
        Page<Order> pageOrders = orderService.findOrders(pageable, userId);
        List<Order> orders = pageOrders.getContent();
        List<OrderDto.Response> responses = mapper.ordersToOrdersResponse(orders);

        return new ResponseEntity(new MultiResponseDto<>(
                responses, pageOrders), HttpStatus.OK);
    }

    @DeleteMapping("{order-id}")
    public ResponseEntity deleteOrder(@PathVariable("order-id") long orderId){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);
        orderService.removeOrder(orderId, userId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
