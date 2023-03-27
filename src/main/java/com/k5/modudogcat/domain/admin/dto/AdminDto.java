package com.k5.modudogcat.domain.admin.dto;

import com.k5.modudogcat.domain.seller.entity.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AdminDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private Long sellerId;

        private Seller.SellerStatus sellerStatus;

    }

    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
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

    }

}
