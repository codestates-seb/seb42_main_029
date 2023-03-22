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
    ReviewDto.Response reviewToResponse(Review review);
    default List<Image> multipartFilesToImages(List<MultipartFile> multiDto) throws IOException {
        //given
        List<Image> images = multiDto.stream()
                .map(multipartFile -> {
                    Image image = new Image();
                    try {
                        image.setImage(multipartFile.getBytes());
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    return image;
                })
                .collect(Collectors.toList());



        return images;
    }

}
