package com.k5.modudogcat.domain.product.dto;

import com.k5.modudogcat.domain.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

public class ProductDto {
    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{
        private String name;
        private String productDetail;
        private Integer price;
        private Integer stock;
    }

    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private Long productId;
        private String name;
        private String thumbnailLink;
        private List<String> productDetailLinks;
        private String productDetail;
        private Integer price;
        private Integer stock;
        private Product.ProductStatus productStatus;

        public String getProductStatus(){
            return productStatus.getStatus();
        }
    }
}
