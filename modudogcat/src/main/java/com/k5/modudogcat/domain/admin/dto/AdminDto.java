package com.k5.modudogcat.domain.admin.dto;

import com.k5.modudogcat.domain.seller.entity.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class AdminDto {

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {

        private Long sellerId;

        private String address;

        private String phone;

        private Seller.SellerStatus sellerStatus;

        public Patch(Long sellerId, Seller.SellerStatus sellerStatus) {
            this.sellerId = sellerId;
            this.sellerStatus = sellerStatus;
        }
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {

        private Long sellerId;

        private String id;

        private String password;

        private String name;

        private String registrationNumber;

        private String address;

        private String phone;

        private String bankName;

        private String accountNumber;

        private Seller.SellerStatus sellerStatus;

    }

}
