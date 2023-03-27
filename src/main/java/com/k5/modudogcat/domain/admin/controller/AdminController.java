package com.k5.modudogcat.domain.admin.controller;

import com.k5.modudogcat.domain.admin.dto.AdminDto;
import com.k5.modudogcat.dto.MultiResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

import static com.k5.modudogcat.domain.seller.entity.Seller.SellerStatus.*;

@RestController
@RequestMapping("/admin/sellers")
@AllArgsConstructor
public class AdminController {

    //관리자의 판매자 상태 변경
    @PatchMapping("/{seller-id}")
    public ResponseEntity<AdminDto.Response> patchSellerStatus(@PathVariable("seller-id") @Positive Long sellerId) {

        AdminDto.Patch patchStatus = new AdminDto.Patch(sellerId, SELLER_APPROVE);

        AdminDto.Response responseStatus = new AdminDto.Response
                (patchStatus.getSellerId(),"seller", "seller", "seller", "12345678901234","서울시 어쩌구2 저쩌구2", "01011112222", "신한", "12345678901234",patchStatus.getSellerStatus());

        return new ResponseEntity<>(responseStatus, HttpStatus.OK);
    }

    //관리자의 판매자 회원가입 리스트 조회
    @GetMapping
    public ResponseEntity getSellers(Pageable pageable) {

        List<AdminDto.Response> getSellers = List.of(
                new AdminDto.Response
                        (1L, "seller", "seller", "seller", "e","11111111111111", "서울시 어쩌구 저쩌구", "01012345678", "신한", "12345678901234",SELLER_WAITING),
                new AdminDto.Response
                        (2L, "seller2", "seller2", "seller2", "22222222222222", "경기도 어쩌구 저쩌구", "01011112222", "우리", "12345678901111", SELLER_APPROVE),
                new AdminDto.Response
                        (3L, "seller3", "seller3", "seller3", "33333333333333", "인천시 어쩌구 저쩌구", "01033334444", "기업", "12345678902222", SELLER_REJECTED)
        );

        Page<AdminDto.Response> pageSellers = new PageImpl<>(getSellers, pageable,3);
        List<AdminDto.Response> responseList = pageSellers.getContent();

        return new ResponseEntity(new MultiResponseDto<>(responseList, pageSellers), HttpStatus.OK);
    }

    //관리자의 판매자 회원가입 정보 삭제
    @DeleteMapping("/{seller-id}")
    public ResponseEntity deleteSeller(@PathVariable("seller-id") @Positive Long sellerId) {

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
