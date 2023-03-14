package com.k5.modudogcat.domain.anwser.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class AnswerDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
    public static class Post {

        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Response {

        private Long answerId;

        private String content;
    }
}
