package com.k5.modudogcat.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
public enum ExceptionCode {
    MEMBER_EXISTS(409, "Member already exists"),
    LIKE_EXISTS(409, "Like already exists"),
    MEMBER_NOT_FOUND(404, "Member not found"),
    ADMIN_ONLY(403, "Admin only"),
    MEMBER_ONLY(403, "Member only"),
    ASKED_MEMBER_ONLY(403, "Asked member only"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    ANSWER_NOT_FOUND(404, "Answer not found");

    private int status;

    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

