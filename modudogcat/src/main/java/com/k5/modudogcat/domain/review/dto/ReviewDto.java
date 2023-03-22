package com.k5.modudogcat.domain.review.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class ReviewDto {

    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post{
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
        @NotBlank
        private String title;
        @NotBlank
        private String content;
        @NotBlank
        private int score;
        private LocalDateTime createdAt;
        private List<String> imagesUrls;
    }
}
