package com.k5.modudogcat.member.dto;

import com.k5.modudogcat.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

public class MemberDto {
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
        private Long memberId;
        private String password;
        private String email;
        private String address;
        private Member.MemberStatus memberStatus;
    }

    @Setter
    @Getter
    @AllArgsConstructor
    public static class Response {
        private Long memberId;
        private String name;
        private String password;
        private String email;
        private String address;
        private Member.MemberStatus memberStatus;

        public String getMemberStatus() {
            return memberStatus.getStatus();
        }
    }
}
