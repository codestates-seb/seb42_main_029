package com.k5.modudogcat.domain.review.entity;

import com.k5.modudogcat.audit.Auditable;
import com.k5.modudogcat.domain.review.image.Image;
import com.k5.modudogcat.domain.user.entity.User;
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
    @Enumerated(value = EnumType.STRING)
    private ReviewStatus reviewStatus = ReviewStatus.REVIEW_ACTIVE;
    @OneToMany(mappedBy = "review",cascade = CascadeType.ALL)
    private List<Image> images = new ArrayList<>();
    // todo: User와 연관관계 매핑
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // todo: 상품과 연관관계 매핑
    public enum ReviewStatus{
        REVIEW_ACTIVE("활성중"),
        REVIEW_DELETE("삭제된리뷰");
        @Getter
        private String status;
        ReviewStatus(String status){
            this.status = status;
        }
    }

    public void addImage(Image image){
        this.images.add(image);
        if(image.getReview() != this){
            image.addReview(this);
        }

    }
}
