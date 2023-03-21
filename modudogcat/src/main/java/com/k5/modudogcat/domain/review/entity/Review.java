package com.k5.modudogcat.domain.review.entity;

import com.k5.modudogcat.audit.Auditable;
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
public class Review extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long reviewId;
    private String title;
    @Lob
    private String content;
    @Column(nullable = false, length = 1)
    private int score;
    // todo: 이미지 추가하기
    // todo: User, 상품과 연관관계 매핑
}
