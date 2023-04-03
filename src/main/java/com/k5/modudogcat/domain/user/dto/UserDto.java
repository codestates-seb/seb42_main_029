package com.k5.modudogcat.domain.user.dto;

import com.k5.modudogcat.domain.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.*;
import java.time.LocalDateTime;

public class UserDto {
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Post {
        @Size(min = 5)
        @NotBlank(message = "로그인ID는 필수 입력 값입니다.")
        private String loginId;
        @NotBlank(message = "이름은 필수 입력 값입니다.")
        private String name;
        @NotBlank(message = "비밀번호는 필수 입력 값입니다.")
        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$", message = "비밀번호는 8자 이상의 알파벳과 숫자와 특수문자로 이루어져야 합니다.")
        private String password;
        @Pattern(regexp = "^(?:\\w+\\.?)*\\w+@(?:\\w+\\.)+\\w+$", message = "이메일 형식이 올바르지 않습니다.")
        @NotBlank(message = "이메일은 필수 입력 값입니다.")
        private String email;
        private String address;

    }

    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Patch{
        private Long userId;
        @Pattern(regexp = "^(?=.*[a-zA-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$", message = "비밀번호는 8자 이상의 알파벳과 숫자와 특수문자로 이루어져야 합니다.")
        private String password;
        @Pattern(regexp = "^(?:\\w+\\.?)*\\w+@(?:\\w+\\.)+\\w+$", message = "이메일 형식이 올바르지 않습니다.")
        private String email;
        private String address;
    }

    @Setter
    @Getter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Response {
        private Long userId;
        private String loginId;
        private String name;
        private String email;
        private String address;
        private User.UserStatus userStatus;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

        public String getUserStatus() {
            return userStatus.getStatus();
        }
    }
}
