package com.k5.modudogcat.domain.review.entity;

import com.k5.modudogcat.audit.Auditable;
import com.k5.modudogcat.domain.review.file.UploadFile;
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
@Getter
@Setter
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    private String title;
    @Lob
    private String content;
    @Column(nullable = false, length = 1)
    private int score;
    @OneToMany(mappedBy = "review",cascade = CascadeType.ALL)
    private List<Image> images = new ArrayList<>();
    // Image를 어떻게 할것인가?
    // todo: User, 상품과 연관관계 매핑

    public void addImage(Image image){
        this.images.add(image);
        if(image.getReview() != this){
            image.addReview(this);
        }

    }
}
