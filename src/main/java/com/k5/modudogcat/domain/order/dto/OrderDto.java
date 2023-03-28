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
        private List<OrderProductDto.Post> orderProductDtos;
    }

    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch {
        private Long orderId;
        @NotBlank(message = "수령자는 필수 입력 값입니다.")
        private String receiver;
        @NotBlank(message = "전화번호는 필수 입력 값입니다.")
        private String phone;
        @NotBlank(message = "수령지는 필수 입력 값입니다.")
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
        private Order.OrderStatus orderStatus;
        private Order.PayMethod payMethod;
        private Integer parcelNumber;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private List<ProductDto.Response> productResponse;
        public String getOrderStatus() {
            return orderStatus.getStatus();
        }
        public String getPayMethod() {
            return payMethod.getStatus();
        }
    }
}
