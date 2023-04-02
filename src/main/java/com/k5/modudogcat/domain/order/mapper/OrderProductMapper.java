package com.k5.modudogcat.domain.order.mapper;

import com.k5.modudogcat.domain.order.dto.OrderProductDto;
import com.k5.modudogcat.domain.order.entity.OrderProduct;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderProductMapper {
    List<OrderProductDto.sellerResponse> orderProductListToOrderProductDtoList(List<OrderProduct> orderProducts);

    OrderProductDto.sellerResponse orderProductToSellerResponse(OrderProduct patOrderStatus);
}
