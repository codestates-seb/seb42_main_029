package com.k5.modudogcat.domain.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
        private Long productsCount;
        private String productName;
        private Long productPrice;

    }
}
