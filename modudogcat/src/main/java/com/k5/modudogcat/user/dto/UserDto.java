package com.k5.modudogcat.user.dto;

import com.k5.modudogcat.user.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class UserDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String name;
        private String password;
        private String email;
        private String address;

    }

    @Setter
    @Getter
    @AllArgsConstructor
    public static class Patch{
        private Long userId;
        private String password;
        private String email;
        private String address;
        private User.UserStatus userStatus;
    }

    @Setter
    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long userId;
        private String name;
        private String password;
        private String email;
        private String address;
        private User.UserStatus userStatus;

        public String getUserStatus() {
            return userStatus.getStatus();
        }
    }
}
