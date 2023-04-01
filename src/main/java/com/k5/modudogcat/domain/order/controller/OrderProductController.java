package com.k5.modudogcat.domain.order.controller;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.entity.OrderProduct;
import com.k5.modudogcat.domain.order.service.OrderProductService;
import com.k5.modudogcat.dto.MultiResponseDto;
import com.k5.modudogcat.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/sellers")
@RequiredArgsConstructor
public class OrderProductController {

    private final OrderProductService orderProductService;

    //판매자의 들어온 주문 목록 조회 //Todo : Order가 아닌 OrderProduct
    @GetMapping("/orders")
    public ResponseEntity getOrders(Pageable pageable) {
        List<OrderProduct> orderProductList = orderProductService.findOrders(tokenSellerId());

//        Page<Order> pageOrders = orderProductService.findOrders(pageable, tokenSellerId());
//        List<Order> orders = pageOrders.getContent();
//        List<OrderDto.Response> responseList = orderMapper.orderListToResponseDtoList(orders);

        return new ResponseEntity(new MultiResponseDto<>(responseList, pageOrders), HttpStatus.OK);
    }

    //판매자의 주문 상태 변경
    @PatchMapping("/orders/{order-id}")
    public ResponseEntity patchOrderStatus(@PathVariable("order-id") @Positive Long orderId,
                                           @RequestBody OrderProduct.OrderProductStatus orderStatus) {
        Order order = sellerService.findOrderStatus(orderId, orderStatus);
        Order patchOrderStatus = sellerService.findOrder(tokenSellerId(), order, orderStatus);
        OrderDto.Response response = orderMapper.orderToOrderResponseDto(patchOrderStatus);
        return new ResponseEntity<> (new SingleResponseDto<>(response), HttpStatus.OK);
    }


    //토큰에서 sellerId 뽑아오기
    private Long tokenSellerId() {
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long userId = Long.parseLong(principal);
        return sellerService.findSellerIdById(userId);
    }
}
