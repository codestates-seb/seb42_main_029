package com.k5.modudogcat.domain.seller.dto;

import com.k5.modudogcat.domain.seller.entity.Seller;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class SellerDto {

    @Getter
    @Setter
    @NoArgsConstructor //역직렬화 때문에 기본 생성자 필요
    @AllArgsConstructor
    public static class Post {

        private String id;

        private String password;

        private String name;

        private String registrationNumber;

        private String address;

        private String phone;

        private Seller.SellerStatus SELLER_WAITING;
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

        private Seller.SellerStatus sellerStatus;

        public Response(Long sellerId, String id, String password, String name, String registrationNumber, String address, String phone) {
            this.sellerId = sellerId;
            this.id = id;
            this.password = password;
            this.name = name;
            this.registrationNumber = registrationNumber;
            this.address = address;
            this.phone = phone;
        }
    }

}
