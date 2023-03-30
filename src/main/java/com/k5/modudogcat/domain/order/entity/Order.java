package com.k5.modudogcat.domain.order.entity;

import com.k5.modudogcat.audit.Auditable;
import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "order_table")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Order extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;
    // todo: seller와 연관관계 매핑
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
    private OrderStatus orderStatus = OrderStatus.ORDER_PAY_STANDBY;
    @Enumerated(value = EnumType.STRING)
    private PayMethod payMethod = PayMethod.NO_BANK_BOOK;
    private Integer parcelNumber;
    @OneToMany(mappedBy = "order", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<OrderProduct> orderProductList = new ArrayList<>();
    @ManyToOne
    @JoinColumn(name = "seller_id")
    private Seller seller;
    public enum OrderStatus{
        ORDER_PAY_STANDBY("결제대기"),
        ORDER_PAY_FINISH("결제완료"),
        DELIVERY_PREPARE("베송 준비 중"),
        DELIVERY_ING("배송 중"),
        DELIVERY_COMPLETE("배송 완료"),
        ORDER_DELETE("삭제된주문");
        @Getter
        private final String status;
        OrderStatus(String status){
            this.status = status;
        }
    }

    public enum PayMethod{
        NO_BANK_BOOK("무통장");

        @Getter
        private final String status;
        PayMethod(String status){
            this.status = status;
        }
    }
}
