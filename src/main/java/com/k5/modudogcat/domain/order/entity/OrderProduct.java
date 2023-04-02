package com.k5.modudogcat.domain.order.entity;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.util.OrderProductStatusDeserializer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class OrderProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderProductId;
    @ManyToOne
    @JoinColumn(name = "order_id")
    private Order order;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private Long productCount = 1L;
    @Column(nullable = true)
    private String parcelNumber;
    @Enumerated(value = EnumType.STRING)
    @JsonDeserialize(using = OrderProductStatusDeserializer.class)
    private OrderProductStatus orderProductStatus = OrderProductStatus.ORDER_PAY_STANDBY;

    public enum OrderProductStatus{
        ORDER_PAY_STANDBY("결제대기"),
        ORDER_PAY_FINISH("결제완료"),
        DELIVERY_PREPARE("베송 준비 중"),
        DELIVERY_ING("배송 중"),
        DELIVERY_COMPLETE("배송 완료");
        @Getter
        private final String status;
        OrderProductStatus(String status){
            this.status = status;
        }
    }
}
