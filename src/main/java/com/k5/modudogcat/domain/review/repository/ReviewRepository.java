package com.k5.modudogcat.domain.review.repository;

import com.k5.modudogcat.domain.review.entity.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    Page<Review> findAllByReviewStatusAndUserUserId(Review.ReviewStatus reviewStatus, Long userId, Pageable pageable);
    Page<Review> findAllByReviewStatusAndProductProductId(Review.ReviewStatus reviewStatus, Long productId, Pageable pageable);
}
