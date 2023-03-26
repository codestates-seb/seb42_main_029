package com.k5.modudogcat.domain.order.entity;

import com.k5.modudogcat.audit.Auditable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "order_table")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Order extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    //todo: user serller와 연관관계 매핑
    private String receiver;
    private String phone;
    private String receivingAddress;
    private PayStatus payStatus = PayStatus.PAY_STANDBY;
    private PayMethod payMethod = PayMethod.NOBANKBOOK;
    private Integer count; // 상품 수량
    public enum PayStatus{
        PAY_STANDBY("결제대기"),
        PAY_FINISH("결제완료");
        @Getter
        private final String status;
        PayStatus(String status){
            this.status = status;
        }
    }

    public enum PayMethod{
        NOBANKBOOK("무통장");

        @Getter
        private final String status;
        PayMethod(String status){
            this.status = status;
        }
    }
}
