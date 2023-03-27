package com.k5.modudogcat.domain.seller.dto;

import com.k5.modudogcat.domain.seller.entity.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;

public class SellerDto {

    @Getter
    @Setter
    @NoArgsConstructor //역직렬화 때문에 기본 생성자 필요
    @AllArgsConstructor
    public static class Post {

        @Size(min = 5)
        @NotBlank(message = "로그인ID는 필수 입력 값입니다.")
        private String loginId;

        @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
        @Pattern(regexp = "(?=.*[0-9])(?=.*[a-zA-Z])(?=.*\\W)(?=\\S+$).{8,16}", message = "비밀번호는 8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.")
        private String password;

        @NotBlank(message = "판매자명은 필수 입력 값입니다.")
        private String name;

        @Email
        @NotBlank(message = "이메일은 필수 입력 값입니다.")
        private String email;

        @NotBlank(message = "사업자등록번호는 필수 입력 값입니다.")
        @Pattern(regexp = "^\\d{10}$", message = "사업자등록번호는 10자리의 숫자입니다.")
        private String registrationNumber;

        @NotBlank(message = "주소는 필수 입력 값입니다.")
        private String address;

        @NotBlank(message = "전화번호는 필수 입력 값입니다.")
        @Pattern(regexp = "^\\d{8,12}$", message = "전화번호는 최소 8자리에서 최대 12자리의 숫자입니다.")
        private String phone;

        @NotBlank(message = "은행명은 필수 입력 값입니다.")
        private String bankName;

        @NotBlank(message = "계좌번호는 필수 입력 값입니다.")
        @Pattern(regexp = "^\\d{10,14}$", message = "계좌번호는 최소 10자리에서 최대 14자리의 숫자입니다.")
        private String accountNumber;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private Long sellerId;

        private String address;

        private String phone;

        private Seller.SellerStatus sellerStatus;

        public Patch(Long sellerId, String address, String phone) {
            this.sellerId = sellerId;
            this.address = address;
            this.phone = phone;
        }

    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {

        private Long sellerId;

        private String loginId;

        private String password;

        private String name;

        private String email;

        private String registrationNumber;

        private String address;

        private String phone;

        private String bankName;

        private String accountNumber;

        private Seller.SellerStatus sellerStatus;

        public Response(Long sellerId, String loginId, String password, String name, String registrationNumber, String address, String phone, String bankName, String accountNumber) {
            this.sellerId = sellerId;
            this.loginId = loginId;
            this.password = password;
            this.name = name;
            this.registrationNumber = registrationNumber;
            this.address = address;
            this.phone = phone;
            this.bankName = bankName;
            this.accountNumber = accountNumber;
        }
    }

}