package com.k5.modudogcat.domain.review.service;

import com.k5.modudogcat.domain.review.entity.Image;
import com.k5.modudogcat.domain.review.entity.Review;
import com.k5.modudogcat.domain.review.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
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
        //Todo: 콘솔창을 꽉채우는데.. 이게 뭘까요?
        List<Image> collect = images.stream()
                .map(image -> {
                    saveReviewed.addImage(image);
                    return image;
                }).collect(Collectors.toList());
        return saveReviewed;
    }

}
