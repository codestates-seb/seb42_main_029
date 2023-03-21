package com.k5.modudogcat.domain.review.repository;

import com.k5.modudogcat.domain.review.entity.Review;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Long> {
}
