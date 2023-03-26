package com.k5.modudogcat.domain.order.mapper;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    @Mapping(source = "userId", target = "user.userId")
    Order orderPostToOrder(OrderDto.Post postDto);
    Order orderPatchToOrder(OrderDto.Patch patchDto);
    OrderDto.Response orderToOrderResponse(Order order);
//    List<OrderDto.Response> ordersToOrdersResponse(List<Order> orderList);
}
