package com.k5.modudogcat.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    USER_LOGIN_ID_EXISTS(409, "이미 존재하는 로그인 ID 입니다"),
    USER_EMAIL_EXISTS(409, "이미 존재하는 이메일입니다."),
    USER_NOT_FOUND(404, "해당 회원은 존재하지 않습니다."),
    REMOVED_USER(403, "해당 회원은 삭제된 회원입니다."),
    SLEEPER_USER(403, "해당 회원은 삭제된 회원입니다."),
    SELLER_REGISTRATION_NUMBER_EXISTS(409, "이미 존재하는 사업자등록번호입니다."),
    SELLER_NOT_FOUND(404,"해당 판매자는 존재하지 않습니다."),
    SELLER_REJECTED(404, "가입 거절된 판매자입니다."),
    SELLER_WAITING(404, "가입 승인 대기 중인 판매자입니다."),
    REVIEW_NOT_FOUND(404, "해당 리뷰은 존재하지 않습니다."),
    REMOVED_REVIEW(403, "해당 리뷰는 삭제된 리뷰입니다."),
    IMAGE_NOT_FOUND(404, "해당 이미지은 존재하지 않습니다."),
    ORDER_NOT_FOUND(404, "해당 주문은 존재하지 않습니다."),
    REMOVED_ORDER(403, "해당 주문은 삭제된 주문입니다."),
    NOT_ALLOWED_USER(409, "올바르지 않은 로그인 회원이 요청하고 있습니다."),
    PRODUCT_NOT_FOUND(404, "해당 상품은 존재하지 않습니다"),
    REMOVED_PRODUCT(403,"해당 상품은 삭제된 상품입니다.");

    private int status;

    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}

