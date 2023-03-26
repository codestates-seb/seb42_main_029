package com.k5.modudogcat.domain.order.dto;

import com.k5.modudogcat.domain.order.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class OrderDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
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

//    @Setter
//    @Getter
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class Patch {
//
//    }

//    @Setter
//    @Getter
//    @NoArgsConstructor
//    @AllArgsConstructor
//    public static class Response {
//
//    }
}
