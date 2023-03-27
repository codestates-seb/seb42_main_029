package com.k5.modudogcat.domain.seller.entity;

import com.k5.modudogcat.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Seller extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sellerId;

    @Column(nullable = false, length = 20, unique = true)
    private String loginId;

    @Column(nullable = false, length = 20)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false, length = 10)
    private String registrationNumber;

    @Column(nullable = false)
    private String address;

    @Column(nullable = false, length = 12)
    private String phone;

    @Column
    @Enumerated(value = EnumType.STRING)
    private SellerStatus sellerStatus = SellerStatus.SELLER_WAITING;

    @Column(nullable = false, length = 14)
    private String accountNumber;

    @Column(nullable = false)
    private String bankName;

    public enum SellerStatus {
        SELLER_WAITING("승인 대기 중"),
        SELLER_APPROVE("가입 승인"),
        SELLER_REJECTED("가입 거절");

        @Getter
        private final String status;
        SellerStatus(String status) {
            this.status = status;
        }
    }


}
