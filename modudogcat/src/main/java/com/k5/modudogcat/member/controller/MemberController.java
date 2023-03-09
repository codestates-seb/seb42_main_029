package com.k5.modudogcat.member.controller;

import com.k5.modudogcat.dto.MultiResponseDto;
import com.k5.modudogcat.dto.SingleResponseDto;
import com.k5.modudogcat.member.Mapper.MemberMapper;
import com.k5.modudogcat.member.dto.MemberDto;
import com.k5.modudogcat.member.entity.Member;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
@Validated
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/members/";
    private final MemberMapper mapper;

    @PostMapping
    public ResponseEntity postMember(@RequestBody MemberDto.Post postDto){
        Member member = new Member();
        Long memberId = member.getMemberId();
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, ++memberId);

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") Long memberId,
                                      @RequestBody MemberDto.Patch patchDto){
        MemberDto.Response response =
                new MemberDto.Response(memberId,
                        "홍길동",
                        "changePW",
                        "abc@naver.com",
                        "바뀐주소",
                        Member.MemberStatus.MEMBER_SLEEP);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId){

        MemberDto.Response response =
                new MemberDto.Response(memberId,
                        "홍길동",
                        "hong1234",
                        "hong123@google.com",
                        "서울특별시 구로구 구일로4길 57",
                        Member.MemberStatus.MEMBER_ACTIVE);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMembers(Pageable pageable){
        List<Member> members = new ArrayList<>();
        MemberDto.Response response1 =
                new MemberDto.Response(1L,
                        "홍길동",
                        "hong1234",
                        "hong123@google.com",
                        "서울특별시 구로구 구일로4길 57",
                        Member.MemberStatus.MEMBER_ACTIVE);
        MemberDto.Response response2 =
                new MemberDto.Response(2L,
                        "김규하",
                        "kim1234",
                        "kimm123@google.com",
                        "서울특별시 구로구 새말로9길",
                        Member.MemberStatus.MEMBER_ACTIVE);

        Page<MemberDto.Response> pageMembers =
                new PageImpl<>(List.of(response1, response2),
                       pageable,2);

        return new ResponseEntity(new MultiResponseDto<>(
                List.of(response1, response2), pageMembers), HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long memberId){

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
