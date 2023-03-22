package com.k5.modudogcat.domain.review.repository;

import com.k5.modudogcat.domain.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findAllByReviewStatus(Review.ReviewStatus reviewStatus);
}
