package com.k5.modudogcat.domain.cart.entity;

import com.k5.modudogcat.domain.product.entity.Product;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class CartProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cartProductId;
    @ManyToOne
    @JoinColumn(name = "cart_id")
    private Cart cart;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
    private Integer products_count = 1;

    public void addCart(Cart cart){
        this.cart = cart;
        if(!cart.getCartProductList().contains(this)){
            cart.getCartProductList().add(this);
        }
    }
}
