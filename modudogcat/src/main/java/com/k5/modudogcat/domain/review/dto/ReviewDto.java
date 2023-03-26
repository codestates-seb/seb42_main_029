package com.k5.modudogcat.domain.review.dto;

import com.k5.modudogcat.domain.review.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class ReviewDto {
    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{
        private Long userId;
        @NotBlank
        private String title;
        @NotBlank
        private String content;
        @NotBlank
        private int score;
    }
    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response{
        private Long reviewId;
        private String title;
        private String content;
        private int score;
        private LocalDateTime createdAt;
        private Review.ReviewStatus reviewStatus;
        private List<String> imagesUrls;

        // HttpMessageConverter 에서 동작
        public String getReviewStatus(){
            return reviewStatus.getStatus();
        }
    }
}
