package com.k5.modudogcat.domain.cart.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CartDto {
    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private Long cartId;

    }
}