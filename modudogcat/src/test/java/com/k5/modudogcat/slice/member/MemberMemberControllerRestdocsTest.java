package com.k5.modudogcat.slice.member;

import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import com.k5.modudogcat.member.Mapper.MemberMapper;
import com.k5.modudogcat.member.controller.MemberController;
import com.k5.modudogcat.member.dto.MemberDto;
import com.k5.modudogcat.member.entity.Member;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;

import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;


import static com.k5.modudogcat.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.k5.modudogcat.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;


import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(MemberController.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
//@Transactional
public class MemberMemberControllerRestdocsTest {
    @Autowired
    private MockMvc mockMvc;
    // @MockBean -> 필요시 Service 추가
    @MockBean
    private MemberMapper mapper;
    @Autowired
    private Gson gson;
    private MemberDto.Post post;
    private ResultActions postResultActions;

    @Test
    public void postMemberTest() throws Exception {
        // given
        this.post = new MemberDto.Post("홍길동",
                "hong1234",
                "hong123@google.com",
                "서울특별시 구로구 구일로4길 57");
        String content = gson.toJson(post);
        URI uri = UriComponentsBuilder.newInstance().path("/members").build().toUri();

        // when
        this.postResultActions = mockMvc.perform(
                post(uri)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );
        // then
        this.postResultActions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/members/"))))
                .andDo(document("post-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("address").type(JsonFieldType.STRING).description("주소")
                                )
                        ),
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        )
                ));
    }

    @Test
    public void patchMember() throws Exception{
        // given
        long memberId = 1L;
        MemberDto.Patch patch =
                new MemberDto.Patch(memberId,"changePW", "abc@naver.com","바뀐주소", Member.MemberStatus.MEMBER_SLEEP);
        String content = gson.toJson(patch);

        // when
        ResultActions actions =
                mockMvc.perform(
                        patch("/members/{member-id}", memberId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(content)
                );

        // then
        actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.memberId").value(patch.getMemberId()))
                .andExpect(jsonPath("$.data.password").value(patch.getPassword()))
                .andExpect(jsonPath("$.data.email").value(patch.getEmail()))
                .andExpect(jsonPath("$.data.address").value(patch.getAddress()))
                .andExpect(jsonPath("$.data.memberStatus").value(patch.getMemberStatus().getStatus()));
    }

    @Test
    public void getMember() throws Exception{
        //given
        Long memberId = 1L;


        //when
        ResultActions actions =
                mockMvc.perform(
                        get("/members/{member-id}", memberId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                );
        //then
        actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data.memberId").value(memberId));
    }

    @Test
    public void getMembersTest() throws Exception{
        // given
        String page = "0"; String size = "10";
        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);

        //when
        ResultActions actions =
                mockMvc.perform(
                        get("/members")
                                .queryParams(queryParams)
                                .accept(MediaType.APPLICATION_JSON)
                );

        //then
        MvcResult result = actions
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.data").isArray())
                .andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");

        assertThat(list.size(), is(2));
    }

    //Todo: 삭제 테스트
    @Test
    public void deleteMember() throws Exception{
        //given
        Long memberId = 1L;

        ResultActions actions =
            mockMvc.perform(
                    delete("/members/{member-id}",memberId)
                            .accept(MediaType.APPLICATION_JSON)
                            .contentType(MediaType.APPLICATION_JSON)
            );

        actions
                .andExpect(status().isNoContent());
    }
}
