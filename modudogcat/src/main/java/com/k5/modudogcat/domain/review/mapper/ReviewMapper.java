package com.k5.modudogcat.domain.review.mapper;

import com.k5.modudogcat.domain.review.dto.ReviewDto;
import com.k5.modudogcat.domain.review.image.Image;
import com.k5.modudogcat.domain.review.entity.Review;
import org.mapstruct.Mapper;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review reviewPostToReview(ReviewDto.Post postDto);
    default ReviewDto.Response reviewToResponse(Review review){
        if ( review == null ) {
               return null;
        }
        ReviewDto.Response response = new ReviewDto.Response();
        List<String> links = review.getImages().stream()
                .map(image -> {
                    String link = "http://localhost:8080/images/" + image.getImageId();
                    return link;
                })
                .collect(Collectors.toList());

        response.setTitle( review.getTitle() );
        response.setContent( review.getContent() );
        response.setScore( review.getScore() );
        response.setCreatedAt( review.getCreatedAt() );
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
