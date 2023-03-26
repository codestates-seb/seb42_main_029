package com.k5.modudogcat.domain.order.mapper;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.user.dto.UserDto;
import com.k5.modudogcat.domain.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {
    Order orderPostToOrder(OrderDto.Post postDto);
//    Order orderPatchToOrder(OrderDto.Patch patchDto);
//    OrderDto.Response orderToOrderResponse(Order order);
//    List<OrderDto.Response> ordersToOrdersResponse(List<Order> orderList);
}
