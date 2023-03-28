package com.k5.modudogcat.domain.order.mapper;

import com.k5.modudogcat.domain.order.dto.OrderDto;
import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.order.entity.OrderProduct;
import com.k5.modudogcat.domain.product.dto.ProductDto;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.mapper.ProductMapper;
import com.k5.modudogcat.domain.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = ProductMapper.class)
public interface OrderMapper {
    Order orderPatchToOrder(OrderDto.Patch patchDto);
    default List<OrderDto.Response> ordersToOrdersResponse(List<Order> orderList, String domain){
        if ( orderList == null ) {
            return null;
        }

        List<OrderDto.Response> list = new ArrayList<OrderDto.Response>( orderList.size() );
        for ( Order order : orderList ) {
            list.add( orderToOrderResponse( order , domain) );
        }

        return list;
    }

    default Order orderPostToOrder(OrderDto.Post postDto){
        if ( postDto == null ) {
            return null;
        }
        User fkUser = new User();
        fkUser.setUserId(postDto.getUserId());

        Order order = new Order();
        order.setReceiver( postDto.getReceiver() );
        order.setPhone( postDto.getPhone() );
        order.setReceivingAddress( postDto.getReceivingAddress() );

        List<OrderProduct> orderProducts = postDto.getOrderProductDtos().stream()
                .map(orderProductDto -> {
                    OrderProduct orderProduct = new OrderProduct();
                    Product product = new Product();
                    product.setProductId(orderProductDto.getProductId());
                    orderProduct.setOrder(order);
                    orderProduct.setProduct(product);
                    orderProduct.setCount(orderProductDto.getCount());
                    return orderProduct;
                }).collect(Collectors.toList());
        order.setUser(fkUser);
        order.setOrderProductList(orderProducts);
        return order;
    }

    default OrderDto.Response orderToOrderResponse(Order order, String domain) {
        if ( order == null ) {
            return null;
        }

        OrderDto.Response response = new OrderDto.Response();

        response.setUserId( orderUserUserId( order ) );
        response.setOrderId( order.getOrderId() );
        response.setReceiver( order.getReceiver() );
        response.setPhone( order.getPhone() );
        response.setReceivingAddress( order.getReceivingAddress() );
        response.setOrderStatus( order.getOrderStatus() );
        response.setPayMethod( order.getPayMethod() );
        response.setParcelNumber( order.getParcelNumber() );
        response.setCreatedAt( order.getCreatedAt() );
        response.setModifiedAt( order.getModifiedAt() );

        ProductDto.Response productResponse = new ProductDto.Response();
        List<ProductDto.Response> productDtoResponses = order.getOrderProductList().stream()
                .map(orderProduct -> {
                    return ProductMapper.productToResponse(orderProduct.getProduct(), domain);
                })
                .collect(Collectors.toList());
        response.setProductResponse(productDtoResponses);

        return response;
    }

    default Long orderUserUserId(Order order) {
        if ( order == null ) {
            return null;
        }
        User user = order.getUser();
        if ( user == null ) {
            return null;
        }
        Long userId = user.getUserId();
        if ( userId == null ) {
            return null;
        }
        return userId;
    }
}
