package com.k5.modudogcat.domain.review.controller;

import com.k5.modudogcat.domain.review.dto.ReviewDto;
import com.k5.modudogcat.domain.review.image.Image;
import com.k5.modudogcat.domain.review.entity.Review;
import com.k5.modudogcat.domain.review.mapper.ReviewMapper;
import com.k5.modudogcat.domain.review.service.ReviewService;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReviewController {
    private final ReviewService reviewService;
    private final ReviewMapper reviewMapper;

    @PostMapping(path = "/users/{user-id}/reviews", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity postReview(@PathVariable("user-id") Long userId,
                                     @RequestPart(name = "post") ReviewDto.Post postDto,
                                     @RequestPart(required = false) List<MultipartFile> images
    ) throws IOException {
        postDto.setUserId(userId);
        Review review = reviewMapper.reviewPostToReview(postDto);
        List<Image> imageList = reviewMapper.multipartFilesToImages(images);
        Review findReview = reviewService.createReview(review, imageList);
        URI location = UriCreator.createUri("/users/" + userId + "/reviews", findReview.getReviewId());

        return ResponseEntity.created(location)
                .body("Image uploaded successfully");
    }

    @GetMapping("/users/{user-id}/reviews/{review-id}")
    public ResponseEntity getReview(@PathVariable("user-id") Long userId,
                                    @PathVariable("review-id") Long reviewId) {
        Review findReview = reviewService.findReview(reviewId);
        ReviewDto.Response response = reviewMapper.reviewToResponse(findReview);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping("/users/{user-id}/reviews")
    public ResponseEntity getReviews(@PathVariable("user-id") Long userId,
                                     Pageable pageable){
        Page<Review> reviewPages = reviewService.findReviews(pageable);
        List<Review> reviews = reviewPages.getContent();
        List<ReviewDto.Response> responses = reviewMapper.reviewsToResponses(reviews);

        return new ResponseEntity(responses, HttpStatus.OK);
    }

    @DeleteMapping("/users/{user-id}/reviews/{review-id}")
    public ResponseEntity deleteReview(@PathVariable("user-id") Long userId,
                                       @PathVariable("review-id") Long reviewId){
        reviewService.removeReview(reviewId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
