package com.k5.modudogcat.member.Mapper;

import com.k5.modudogcat.member.dto.MemberDto;
import com.k5.modudogcat.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post postDto);
    Member memberPatchToMember(MemberDto.Patch patchDto);
    MemberDto.Response memberToMemberResponse(Member member);
    List<MemberDto.Response> membersToMembersResponse(List<Member> memberList);
}
