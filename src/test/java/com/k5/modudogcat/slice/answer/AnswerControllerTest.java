//package com.k5.modudogcat.slice.answer;
//
//import com.google.gson.Gson;
//import com.jayway.jsonpath.JsonPath;
//import com.k5.modudogcat.domain.anwser.controller.AnswerController;
//import com.k5.modudogcat.domain.anwser.dto.AnswerDto;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
//import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
//import org.springframework.boot.test.mock.mockito.MockBean;
//import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.MediaType;
//import org.springframework.restdocs.payload.JsonFieldType;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.MvcResult;
//import org.springframework.test.web.servlet.ResultActions;
//import org.springframework.util.LinkedMultiValueMap;
//import org.springframework.util.MultiValueMap;
//
//
//import java.util.List;
//
//import static com.k5.modudogcat.util.ApiDocumentUtils.getRequestPreProcessor;
//import static com.k5.modudogcat.util.ApiDocumentUtils.getResponsePreProcessor;
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.hamcrest.Matchers.is;
//import static org.hamcrest.Matchers.startsWith;
//import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
//import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
//import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
//import static org.springframework.restdocs.payload.PayloadDocumentation.*;
//import static org.springframework.restdocs.request.RequestDocumentation.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
//@WebMvcTest(AnswerController.class)
//@MockBean(JpaMetamodelMappingContext.class)
//@AutoConfigureRestDocs
//public class AnswerControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private Gson gson;
//
//    @Test
//    public void postAnswerTest() throws Exception {
//
//        //given
//        AnswerDto.Post post= new AnswerDto.Post("답변입니다.");
//        String content = gson.toJson(post);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        post("/sellers/answers")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//
//        //then
//        actions
//                .andExpect(status().isCreated())
//                .andExpect(header().string("Location", is(startsWith("/sellers/answers/1"))))
//                .andDo(document(
//                        "post-answer",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        requestFields(
//                                fieldWithPath("content").type(JsonFieldType.STRING).description("답변 내용")
//                        ),
//                        responseHeaders(
//                                headerWithName(HttpHeaders.LOCATION).description("Location Header.등록된 리소스의 URI")
//                        )
//
//                ));
//    }
//
//    @Test
//    public void getAnswerTest() throws Exception {
//
//        //given
//        Long answerId = 1L;
//        AnswerDto.Response response = new AnswerDto.Response(answerId, "답변입니다.");
//        //String content = gson.toJson(response);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        get("/sellers/answers/{answer-id}", answerId)
//                                .accept(MediaType.APPLICATION_JSON)
//                );
//
//        //then
//        actions.andExpect(status().isOk())
//                .andExpect(jsonPath("$.answerId").value(response.getAnswerId()))
//                .andDo(document(
//                        "get-answer",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("answer-id").description("답변 식별자")
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
//                                        fieldWithPath("content").type(JsonFieldType.STRING).description("답변 내용")
//                                )
//                        )
//                ));
//
//    }
//
//    @Test
//    public void getAnswersTest() throws Exception {
//        //given
//        String page = "0";
//        String size = "12";
//        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
//        queryParams.add("page", page);
//        queryParams.add("size", size);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        get("/sellers/answers")
//                                .params(queryParams)
//                                .accept(MediaType.APPLICATION_JSON)
//                );
//
//        //then
//        MvcResult result = actions
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data").isArray())
//                .andReturn();
//
//        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");
//
//        assertThat(list.size(), is(3));
//
//        actions.andDo(document(
//                "get-answers",
//                getRequestPreProcessor(),
//                getResponsePreProcessor(),
//                requestParameters(
//                        List.of(
//                                parameterWithName("page").description("페이지"),
//                                parameterWithName("size").description("사이즈")
//                        )
//                ),
//                responseFields(
//                        List.of(
//                                fieldWithPath("data").type(JsonFieldType.ARRAY).description("Q&A 답변 리스트"),
//                                fieldWithPath("data[].answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
//                                fieldWithPath("data[].content").type(JsonFieldType.STRING).description("답변 내용"),
//
//                                fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
//                                fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 수"),
//                                fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 사이즈"),
//                                fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 요소"),
//                                fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 페이지")
//                        )
//                )
//        ));
//    }
//}
