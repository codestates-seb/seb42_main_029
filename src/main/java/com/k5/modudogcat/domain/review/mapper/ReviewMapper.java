package com.k5.modudogcat.domain.review.mapper;

import com.k5.modudogcat.domain.review.dto.ReviewDto;
import com.k5.modudogcat.domain.review.entity.reviewImage.Image;
import com.k5.modudogcat.domain.review.entity.Review;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    @Mapping(source = "userId", target = "user.userId")
    @Mapping(source = "productId", target = "product.productId")
    Review reviewPostToReview(ReviewDto.Post postDto);
    default List<ReviewDto.Response> reviewsToResponses(List<Review> reviews, String domain){
        if ( reviews == null ) {
            return null;
        }

        List<ReviewDto.Response> list = new ArrayList<ReviewDto.Response>( reviews.size() );
        for ( Review review : reviews ) {
            list.add( reviewToResponse( review, domain ) );
        }

        return list;
    }
    default ReviewDto.Response reviewToResponse(Review review, String domain){
        if ( review == null ) {
               return null;
        }
        ReviewDto.Response response = new ReviewDto.Response();
        List<String> links = review.getImages().stream()
                .map(image -> {
                    String link = domain + "/reviewImages/" + image.getImageId();
                    return link;
                })
                .collect(Collectors.toList());

        response.setReviewId( review.getReviewId() );
        response.setTitle( review.getTitle() );
        response.setContent( review.getContent() );
        response.setScore( review.getScore() );
        response.setCreatedAt( review.getCreatedAt() );
        response.setReviewStatus( review.getReviewStatus());
        response.setImagesUrls(links);

        return response;
    }
    default List<Image> multipartFilesToImages(List<MultipartFile> multiDto) throws IOException {
        if(multiDto == null){
            return null;
        }
        //given
        List<Image> images = multiDto.stream()
                .map(multipartFile -> {
                    Image image = new Image();
                    try {
                        image.setImage(multipartFile.getBytes());
                        image.setType(multipartFile.getContentType());
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    return image;
                })
                .collect(Collectors.toList());

        return images;
    }

}
