package com.k5.modudogcat.domain.review.entity.reviewImage;

import com.k5.modudogcat.domain.review.entity.Review;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Setter
@Getter
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long imageId;
    @Lob
    private byte[] image;
    @Column(nullable = false, length = 50)
    private String type;
    @ManyToOne
    @JoinColumn(name= "review_id")
    private Review review;

    public void addReview(Review review){
        this.review = review;
        if(!review.getImages().contains(this)){
            this.review.addImage(this);
        }
    }
}
