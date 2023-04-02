package com.k5.modudogcat.domain.review.service;

import com.k5.modudogcat.domain.review.entity.reviewImage.Image;
import com.k5.modudogcat.domain.review.entity.Review;
import com.k5.modudogcat.domain.review.repository.ReviewRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    @Transactional
    public Review createReview(Review review, List<Image> images){
        //todo: 해당 유저의 상품, 리뷰가 존재할 시, 리뷰가 이미 존재하고 있음을 알리자.
        // todo : 리뷰가 생성되면, 상품에도 리뷰가 추가되어야한다.
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
        Optional<Review> optionalReview = reviewRepository.findById(reviewId);
        Review verifiedReview = optionalReview.orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND);
        });

        verifiedActiveReview(verifiedReview);
        return verifiedReview;
    }

    public Page<Review> findUserReviews(Pageable pageable, Long userId){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                Sort.by("createdAt").descending());
        Page<Review> findReviews = reviewRepository.findAllByReviewStatusAndUserUserId(Review.ReviewStatus.REVIEW_ACTIVE, userId, of);

        return findReviews;
    }

    public Page<Review> findProductReviews(Pageable pageable, Long productId){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                Sort.by("createdAt").descending());
        Page<Review> findReviews = reviewRepository.findAllByReviewStatusAndProductProductId(Review.ReviewStatus.REVIEW_ACTIVE, productId, of);

        return findReviews;
    }

    public void removeReview(Long reviewId){
        Review findReview = findReview(reviewId);
        verifiedActiveReview(findReview);
        findReview.setReviewStatus(Review.ReviewStatus.REVIEW_DELETE);
        reviewRepository.save(findReview);
    }

    private void verifiedActiveReview(Review verifiedReview){
        if(verifiedReview.getReviewStatus().getStatus().equals("삭제된리뷰")) {
            throw new BusinessLogicException(ExceptionCode.REMOVED_REVIEW);
        }
    }
}
