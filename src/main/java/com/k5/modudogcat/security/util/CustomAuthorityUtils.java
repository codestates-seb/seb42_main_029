package com.k5.modudogcat.security.util;

import com.k5.modudogcat.domain.user.entity.User;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;
@Component
public class CustomAuthorityUtils {
    //todo: 어떤식으로 관리자 권한을 줄것인지 설정
    @Value("admin")
    private String adminMailAddress;
    private final List<String> ADMIN_ROLES_STRING = List.of("ADMIN","SELLER", "BUYER");
    private final List<String> BUYER_ROLES_STRING = List.of("BUYER");
    private final List<String> SELLER_ROLES_STRING = List.of("SELLER");

    // DB에 저장된 Role을 기반으로 권한 정보 생성
    public List<GrantedAuthority> createAuthorities(List<String> roles) {
        List<GrantedAuthority> authorities = roles.stream()
                .map(role -> new SimpleGrantedAuthority("ROLE_" + role))
                .collect(Collectors.toList());
        return authorities;
    }

    // DB 저장 용
    public List<String> createRoles(User user) {
        if (user.getLoginId().equals("admin")) {
            return ADMIN_ROLES_STRING;
        }
        // todo: 판매자 권한 설정
        return BUYER_ROLES_STRING;
    }
}
