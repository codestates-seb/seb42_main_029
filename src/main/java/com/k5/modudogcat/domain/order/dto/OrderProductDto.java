package com.k5.modudogcat.domain.order.dto;

import com.k5.modudogcat.domain.order.entity.OrderProduct;
import com.k5.modudogcat.domain.product.dto.ProductDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

public class OrderProductDto {
    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{
        private Long productId;
        private Long productCount;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {
        private Long productCount;
        private String productName;
        private Long productPrice;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailResponse {
        private Long productCount;
        private String parcelNumber;
        private OrderProduct.OrderProductStatus orderProductStatus;
        private ProductDto.Response productResponse;
    }
}
