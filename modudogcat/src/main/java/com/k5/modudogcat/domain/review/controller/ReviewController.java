package com.k5.modudogcat.domain.review.controller;

import com.k5.modudogcat.domain.review.dto.ReviewDto;
import com.k5.modudogcat.domain.review.entity.Image;
import com.k5.modudogcat.domain.review.entity.Review;
import com.k5.modudogcat.domain.review.mapper.ReviewMapper;
import com.k5.modudogcat.domain.review.service.ReviewService;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
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
                                     @RequestPart List<MultipartFile> images
                                     ) throws IOException {
        Review review = reviewMapper.reviewPostToReview(postDto);
        List<Image> imageList = reviewMapper.multipartFilesToImages(images);
        Review findReview = reviewService.createReview(review, imageList);
        URI location = UriCreator.createUri("/users/" + userId + "/reviews", findReview.getReviewId());

        return ResponseEntity.created(location)
                .body("Image uploaded successfully");
    }

//    @GetMapping("/images")
//    public ResponseEntity getImages(@RequestPart ){
//
//      ReviewDto.Response response = reviewMapper.reviewToResponse(findReview);
//        // todo: 응답에서 오류발생
////    }
}
