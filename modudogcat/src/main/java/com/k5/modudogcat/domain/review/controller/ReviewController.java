package com.k5.modudogcat.domain.review.controller;

import com.k5.modudogcat.domain.review.dto.ReviewDto;
import com.k5.modudogcat.domain.review.entity.Review;
import com.k5.modudogcat.domain.review.mapper.ReviewMapper;
import com.k5.modudogcat.domain.review.service.ReviewService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewMapper reviewMapper;
    @PostMapping("/users/{user-id}/reviews")
    public ResponseEntity postReview(@PathVariable("user-id") Long userId,
                                     @RequestBody ReviewDto.Post post){
        Review review = reviewMapper.reviewPostToReview(post);
        Review findReview = reviewService.createReview(review);
        ReviewDto.Response response = reviewMapper.reviewToResponse(findReview);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }
}
