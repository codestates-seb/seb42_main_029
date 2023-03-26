package com.k5.modudogcat.domain.user.util;

import lombok.Getter;

import java.util.Arrays;

@Getter
public enum UserRoles {
    ROLE_ADMIN,
    ROLE_SELLER,
    ROLE_BUYER;

    public static UserRoles ofValue(String value){
        return Arrays.stream(UserRoles.values()).filter(a -> a.name().equals(value))
                .findFirst()
                .orElseThrow(IllegalStateException::new);
    }
}
