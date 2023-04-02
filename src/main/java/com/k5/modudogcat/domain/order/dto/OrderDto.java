package com.k5.modudogcat.domain.order.dto;

import com.k5.modudogcat.domain.order.entity.Order;
import com.k5.modudogcat.domain.product.dto.ProductDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class OrderDto {
    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        private Long userId;
        @NotBlank(message = "수령자는 필수 입력 값입니다.")
        private String receiver;
        @NotBlank(message = "전화번호는 필수 입력 값입니다.")
        private String phone;
        @NotBlank(message = "수령지는 필수 입력 값입니다.")
        private String receivingAddress;
        @NotBlank(message = "총 금액은 필수 입력 값입니다.")
        private Long totalPrice;
        private List<OrderProductDto.Post> orderProductDtos;
    }

    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long orderId;
        private String receiver;
        private String phone;
        private String receivingAddress;
        @NotBlank(message = "주문수량은 필수 입력 값입니다.")
        @Min(value = 1, message = "1이상의 값을 입력해주세요.")
        private Integer count;
    }

    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long orderId;
        private Long userId;
        private String receiver;
        private String phone;
        private String receivingAddress;
        private Long totalPrice;
        private Order.PayMethod payMethod;
        private Order.OrderStatus orderStatus;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<OrderProductDto.DetailResponse> detailResponses;
        public String getOrderStatus() {
            return orderStatus.getStatus();
        }
        public String getPayMethod() {
            return payMethod.getStatus();
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class SellerResponse {
        private Long orderId;
        //private Long userId;
        //private Long productId;
        private List<OrderProductDto.Response> productList;
        private String receiver;
        private String phone;
        private String receivingAddress;
        private String orderStatus;
        private String parcelNumber;
        private String createdAt;
        private String userLoginId;
        private Long productsCount;

        //@Getter 붙이고 내부 생성자 만들고 @Builder 붙여서 (순서 상관없이, 넣고 싶은 인자만 넣을 수 있게) 만들기
    }
}

