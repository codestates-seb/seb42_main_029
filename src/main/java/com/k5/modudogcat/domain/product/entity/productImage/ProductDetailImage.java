package com.k5.modudogcat.domain.product.entity.productImage;

import com.k5.modudogcat.domain.product.entity.Product;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class ProductDetailImage { 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long detailImageId;
    @Lob
    private byte[] image;
    @Column(length = 50)
    private String type;
    @ManyToOne//Note:연관관계 주인과 FK에 대한 고찰
    @JoinColumn(name = "product_id")
    private Product product; 

    public void addProduct(Product product){
        this.product = product;
        if(!product.getProductDetailImages().contains(this)){
            this.product.addProductDetailImage(this);
        }
    }
}
