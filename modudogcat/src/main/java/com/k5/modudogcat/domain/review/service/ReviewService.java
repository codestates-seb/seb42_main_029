package com.k5.modudogcat.domain.review.service;

import com.k5.modudogcat.domain.review.image.Image;
import com.k5.modudogcat.domain.review.entity.Review;
import com.k5.modudogcat.domain.review.repository.ReviewRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

//    review.setImages(images);
//    Review saveReviewed = reviewRepository.save(review);
//    List<Image> collect = images.stream()
//            .map(image -> {
//                Review tmpReview = new Review();
//                tmpReview.setReviewId(saveReviewed.getReviewId());
//                image.setReview(tmpReview);
//                return image;
//            }).collect(Collectors.toList());
    @Transactional
    public Review createReview(Review review, List<Image> images){
        Review saveReviewed = reviewRepository.save(review);
        if(images != null){
            List<Image> collect = images.stream()
                    .map(image -> {
                        saveReviewed.addImage(image);
                        return image;
                    }).collect(Collectors.toList());
        }
        return saveReviewed;
    }

    public Review findReview(Long reviewId){
        // todo: verification 메서드 생성
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review findreview = optionalReview.orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND);
        });

        return findreview;
    }
}
