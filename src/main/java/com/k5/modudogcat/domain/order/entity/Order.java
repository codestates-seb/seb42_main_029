package com.k5.modudogcat.domain.order.entity;

import com.k5.modudogcat.audit.Auditable;
import com.k5.modudogcat.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @Column(length = 20, nullable = false)
    private String receiver;
    @Column(length = 20, nullable = false)
    private String phone;
    @Column(nullable = false)
    private String receivingAddress;
    @Enumerated(value = EnumType.STRING)
    private OrderStatus orderStatus = OrderStatus.ORDER_ACTIVE;
    @Enumerated(value = EnumType.STRING)
    private PayStatus payStatus = PayStatus.PAY_STANDBY;
    @Enumerated(value = EnumType.STRING)
    private PayMethod payMethod = PayMethod.NOBANKBOOK;
    private Integer count; // 상품 수량

    public enum OrderStatus{
        ORDER_ACTIVE("활성화중"),
        ORDER_DELETE("삭제된주문");
        @Getter
        private final String status;
        OrderStatus(String status){
            this.status = status;
        }
    }
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
