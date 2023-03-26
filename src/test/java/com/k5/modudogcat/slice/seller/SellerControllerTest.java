//package com.k5.modudogcat.slice.seller;
//
//
//import com.google.gson.Gson;
//import com.jayway.jsonpath.JsonPath;
//import com.k5.modudogcat.domain.admin.dto.AdminDto;
//import com.k5.modudogcat.domain.seller.controller.SellerController;
//import com.k5.modudogcat.domain.seller.dto.SellerDto;
//import org.junit.jupiter.api.Test;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
//import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
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
//import java.util.List;
//
//import static com.k5.modudogcat.domain.seller.entity.Seller.SellerStatus.SELLER_APPROVE;
//import static com.k5.modudogcat.util.ApiDocumentUtils.getRequestPreProcessor;
//import static com.k5.modudogcat.util.ApiDocumentUtils.getResponsePreProcessor;
//import static org.hamcrest.MatcherAssert.assertThat;
//import static org.hamcrest.Matchers.is;
//import static org.hamcrest.Matchers.startsWith;
//
//import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
//import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
//import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
//import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
//import static org.springframework.restdocs.payload.PayloadDocumentation.*;
//import static org.springframework.restdocs.request.RequestDocumentation.*;
//import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
//
////@SpringBootTest -> 전체 어플리케이션 컨텍스트 -> 웹, 서비스, 데이터 계층 모두 즉, 통합 테스트 할 때 사용 good
//@WebMvcTest(SellerController.class) //-> 해당하는 부분만! 통합 테스트 혹은 단위 테스트에서 사용! 지금은 단위 테스트이니 이걸로 사용
//@MockBean(JpaMetamodelMappingContext.class)
//@AutoConfigureRestDocs
//@AutoConfigureMockMvc(addFilters = false)
//
//public class SellerControllerTest {
//
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Autowired
//    private Gson gson;
//
//    //판매자 회원가입
//    @Test
//    public void postSellerTest() throws Exception {
//
//        //given
//        SellerDto.Post post = new SellerDto.Post
//                ("seller", "seller", "seller", "12345678901234", "서울시 어쩌구 저쩌구", "01012345678", "신한", "12345678901234");
//        String content = gson.toJson(post);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                    post("/sellers")
//                            .accept(MediaType.APPLICATION_JSON)
//                            .contentType(MediaType.APPLICATION_JSON)
//                            .content(content)
//        );
//
//        //then
//        actions
//                .andExpect(status().isCreated())
//                .andExpect(header().string("Location", is(startsWith("/sellers/1"))))
//                .andDo(document(
//                        "post-seller",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("id").type(JsonFieldType.STRING).description("아이디"),
//                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
//                                        fieldWithPath("name").type(JsonFieldType.STRING).description("상호명"),
//                                        fieldWithPath("registrationNumber").type(JsonFieldType.STRING).description("사업자등록번호"),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("주소"),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("전화번호"),
//                                        fieldWithPath("bankName").type(JsonFieldType.STRING).description("은행명"),
//                                        fieldWithPath("accountNumber").type(JsonFieldType.STRING).description("계좌번호")
//                                )
//                        ),
//                        responseHeaders(
//                                headerWithName(HttpHeaders.LOCATION).description("Location Header.등록된 리소스의 URI")
//                        )
//                ));
//
//    }
//
//    //판매자 페이지 판매자 정보 변경
//    @Test
//    public void patchSellerTest() throws Exception {
//
//        //given
//
//        SellerDto.Patch patch = new SellerDto.Patch
//                (1L, "서울시 어쩌구2 저쩌구2", "01011112222");
//
//        SellerDto.Response response = new SellerDto.Response
//                (patch.getSellerId(), "seller", "seller", "seller", "12345678901234", patch.getAddress(), patch.getPhone(), "신한", "12345678901234");
//
//        String content = gson.toJson(patch);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        patch("/sellers/{seller-id}", 1L)
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(content)
//                );
//
//        //then
//        actions.andExpect(status().isOk())
//                .andExpect(jsonPath("$.sellerId").value(response.getSellerId()))
//                .andExpect(jsonPath("$.id").value(response.getId()))
//                .andExpect(jsonPath("$.password").value(response.getPassword()))
//                .andExpect(jsonPath("$.name").value(response.getName()))
//                .andExpect(jsonPath("$.registrationNumber").value(response.getRegistrationNumber()))
//                .andExpect(jsonPath("$.address").value(response.getAddress()))
//                .andExpect(jsonPath("$.phone").value(response.getPhone()))
//                .andExpect(jsonPath("$.bankName").value(response.getBankName()))
//                .andExpect(jsonPath("$.accountNumber").value(response.getAccountNumber()))
//                .andDo(document(
//                        "patch-seller",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("seller-id").description("판매자 식별자")
//                        ),
//                        requestFields(
//                                List.of(
//                                        fieldWithPath("sellerId").type(JsonFieldType.NUMBER).description("판매자 식별자").ignored(),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("주소").optional(),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("전화번호").optional()
//                                )
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("sellerId").type(JsonFieldType.NUMBER).description("판매자 식별자"),
//                                        fieldWithPath("id").type(JsonFieldType.STRING).description("아이디"),
//                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
//                                        fieldWithPath("name").type(JsonFieldType.STRING).description("상호명"),
//                                        fieldWithPath("registrationNumber").type(JsonFieldType.STRING).description("사업자등록번호"),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("주소"),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("전화번호"),
//                                        fieldWithPath("bankName").type(JsonFieldType.STRING).description("은행명"),
//                                        fieldWithPath("accountNumber").type(JsonFieldType.STRING).description("계좌번호"),
//                                        fieldWithPath("sellerStatus").type(JsonFieldType.NULL).description("판매자 상태")
//                                )
//                        )
//                ));
//    }
//
//    //판매자 페이지 판매자 정보 조회
//    @Test
//    public void getSellerTest() throws Exception{
//        //given
//        Long sellerId = 1L;
//        SellerDto.Response response = new SellerDto.Response
//                (sellerId, "seller", "seller", "seller", "12345678901234", "서울시 어쩌구 저쩌구", "01012345678", "신한", "12345678901234");
//        String content = gson.toJson(response);
//
//        //when
//        ResultActions actions =
//                mockMvc.perform(
//                        get("/sellers/{seller-id}", sellerId)
//                                .accept(MediaType.APPLICATION_JSON)
//                );
//
//        //then
//        actions.andExpect(status().isOk())
//                .andExpect(jsonPath("$.sellerId").value(response.getSellerId()))
//                .andDo(document(
//                        "get-seller",
//                        getRequestPreProcessor(),
//                        getResponsePreProcessor(),
//                        pathParameters(
//                                parameterWithName("seller-id").description("판매자 식별자")
//                        ),
//                        responseFields(
//                                List.of(
//                                        fieldWithPath("sellerId").type(JsonFieldType.NUMBER).description("판매자 식별자"),
//                                        fieldWithPath("id").type(JsonFieldType.STRING).description("아이디"),
//                                        fieldWithPath("password").type(JsonFieldType.STRING).description("비밀번호"),
//                                        fieldWithPath("name").type(JsonFieldType.STRING).description("상호명"),
//                                        fieldWithPath("registrationNumber").type(JsonFieldType.STRING).description("사업자등록번호"),
//                                        fieldWithPath("address").type(JsonFieldType.STRING).description("주소"),
//                                        fieldWithPath("phone").type(JsonFieldType.STRING).description("전화번호"),
//                                        fieldWithPath("bankName").type(JsonFieldType.STRING).description("은행명"),
//                                        fieldWithPath("accountNumber").type(JsonFieldType.STRING).description("계좌번호"),
//                                        fieldWithPath("sellerStatus").type(JsonFieldType.NULL).description("판매자 상태")
//                                )
//                        )
//                ));
//    }
//}
