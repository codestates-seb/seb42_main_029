package com.k5.modudogcat.domain.review.service;

import com.k5.modudogcat.domain.review.entity.Review;
import com.k5.modudogcat.domain.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    public Review createReview(Review review){
        return reviewRepository.save(review);
    }
}
