package com.k5.modudogcat.domain.cart.dto;

import com.k5.modudogcat.domain.product.dto.ProductDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class CartProductDto {
    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private ProductDto.Response productResponse;
        private Integer productCount;
    }
}
