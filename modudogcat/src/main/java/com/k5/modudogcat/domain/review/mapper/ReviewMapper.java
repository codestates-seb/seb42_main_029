package com.k5.modudogcat.domain.review.mapper;

import com.k5.modudogcat.domain.review.dto.ReviewDto;
import com.k5.modudogcat.domain.review.entity.Review;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewPostToReview(ReviewDto.Post postDto);
    ReviewDto.Response reviewToResponse(Review review);
}
