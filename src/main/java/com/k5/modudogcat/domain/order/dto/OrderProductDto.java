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
        private Long productsCount;
        private String productName;
        private Long productPrice;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DetailResponse {
        private Long productsCount;
        private String parcelNumber;
        private OrderProduct.OrderProductStatus orderProductStatus;
        private ProductDto.Response productResponse;
    }
}

    @Getter
    @Setter
    @AllArgsConstructor
    public static class sellerResponse {
        private Long orderProductId;
        private List<OrderProductDto.Response> orderProductList;
        private String createdAt;
        private String receiver;
        private String phone;
        private String receivingAddress;
        private OrderProduct.OrderProductStatus orderProductStatus;
        private String parcelNumber;
    }
    //@Getter 붙이고 내부 생성자 만들고 @Builder 붙여서 (순서 상관없이, 넣고 싶은 인자만 넣을 수 있게) 만들기
}

