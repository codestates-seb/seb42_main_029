package com.k5.modudogcat.domain.product.entity;

import com.k5.modudogcat.audit.Auditable;
import com.k5.modudogcat.domain.product.entity.productDetailImage.ProductDetailImage;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class Product extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long productId;
    // todo: seller와 연관관계 매핑
    @Column(nullable = false)
    private String name;
    @Lob
    private byte[] thumbnailImage;
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<ProductDetailImage> productDetailImages = new ArrayList<>();
    @Lob
    private String productDetail;
    private Integer price;
    private Integer stock;
    private ItemStatus itemStatus = ItemStatus.ITEM_ACTIVE;

    public enum ItemStatus{
        ITEM_ACTIVE("판매중"),
        ITEM_SOLD_OUT("품절"),
        ITEM_DELETE("삭제된상품");
        @Getter
        private String status;
        ItemStatus(String status){
            this.status = status;
        }
    }

    public void addProductDetailImage(ProductDetailImage pdImage){
        this.productDetailImages.add(pdImage);
        if(pdImage.getProduct() != this){
            pdImage.addProduct(this);
        }
    }
}
