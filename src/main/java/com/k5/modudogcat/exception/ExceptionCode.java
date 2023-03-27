package com.k5.modudogcat.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
public enum ExceptionCode {
    USER_LOGIN_ID_EXISTS(409, "이미 존재하는 로그인 ID 입니다"),
    USER_EMAIL_EXISTS(409, "이미 존재하는 이메일입니다."),
    USER_NOT_FOUND(404, "해당 회원은 존재하지 않습니다."),
    REMOVED_USER(403, "해당 회원은 삭제된 회원입니다."),
    SLEEPER_USER(403, "해당 회원은 삭제된 회원입니다."),

    SELLER_NOT_FOUND(404,"해당 판매자는 존재하지 않습니다.");



    private int status;

    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

