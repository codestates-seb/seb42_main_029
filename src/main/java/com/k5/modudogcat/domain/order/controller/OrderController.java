package com.k5.modudogcat.domain.order.controller;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.mapper.OrderMapper;
import com.k5.modudogcat.domain.order.service.OrderService;
import com.k5.modudogcat.dto.MultiResponseDto;
import com.k5.modudogcat.dto.SingleResponseDto;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
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
    @Value("${config.domain}")
    private String domain;
    // 상품상세에서 바로 구매
    @PostMapping
    public ResponseEntity postOrder(@RequestBody OrderDto.Post postDto){
        // todo : 주문 생성시 Product가 가진 sellerId가 Order에 들어가도록 orderPostToOrder() 수정
        // NOTE : 상품을 주문하면, 그 상품의 재고가 count만큼 줄어들도록 구현, 주문이 0개이면 품절상태로 바꾸어 주문이 안되도록해야함
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
        OrderDto.Response response = mapper.orderToOrderResponse(updateOrder, domain);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/{order-id}")
    public ResponseEntity getOrder(@PathVariable("order-id") Long orderId){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);
        Order findOrder = orderService.findOrder(orderId, userId);
        OrderDto.Response response = mapper.orderToOrderResponse(findOrder, domain);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity findBuyerOrders(Pageable pageable){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);
        Page<Order> pageOrders = orderService.findBuyerOrders(pageable, userId);
        List<Order> orders = pageOrders.getContent();
        List<OrderDto.Response> responses = mapper.ordersToOrdersResponse(orders, domain);

        return new ResponseEntity(new MultiResponseDto<>(
                responses, pageOrders), HttpStatus.OK);
    }

    // todo: findSellerOrders() 생성
    // sellerId를 통해 Order를 주문하는 핸들러메서드가 필요합니다.( 판매자

    @DeleteMapping("{order-id}")
    public ResponseEntity deleteOrder(@PathVariable("order-id") long orderId){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);
        orderService.removeOrder(orderId, userId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
