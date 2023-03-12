package com.k5.modudogcat.domain.seller.controller;

import com.k5.modudogcat.domain.seller.dto.SellerDto;
import com.k5.modudogcat.dto.MultiResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

import static com.k5.modudogcat.domain.seller.entity.Seller.SellerStatus.*;

@RestController
@RequestMapping("/sellers")
@AllArgsConstructor
public class SellerController {

    @PostMapping
    public ResponseEntity postSeller(@RequestBody SellerDto.Post postDto) {

        return ResponseEntity.created(URI.create("/sellers/1")).build();
    }

    //판매자의 판매자 페이지 정보 변경 (주소, 전화번호)
    @PatchMapping("/{seller-id}")
    public ResponseEntity<SellerDto.Response> patchSeller(@PathVariable("seller-id") @Positive Long sellerId) {

        SellerDto.Patch patch = new SellerDto.Patch(sellerId, "서울시 어쩌구2 저쩌구2", "01011112222");

        SellerDto.Response response = new SellerDto.Response
                (patch.getSellerId(), "seller", "seller", "seller", "12345678901234", patch.getAddress(), patch.getPhone());

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //관리자의 판매자 상태 변경
    @PatchMapping("/admin/{seller-id}")
    public ResponseEntity<SellerDto.Response> patchSellerStatus(@PathVariable("seller-id") @Positive Long sellerId) {

        SellerDto.Patch patchStatus = new SellerDto.Patch(sellerId, SELLER_APPROVE);

        SellerDto.Response responseStatus = new SellerDto.Response
                (patchStatus.getSellerId(),"seller", "seller", "seller", "12345678901234","서울시 어쩌구2 저쩌구2", "01011112222", patchStatus.getSellerStatus());

        return new ResponseEntity<>(responseStatus, HttpStatus.OK);
    }

    //판매자의 판매자 페이지 조회
    @GetMapping("/{seller-id}")
    public ResponseEntity<SellerDto.Response> getSeller(@PathVariable("seller-id") @Positive Long sellerId) {

        SellerDto.Response response = new SellerDto.Response
                (sellerId, "seller", "seller", "seller", "12345678901234", "서울시 어쩌구 저쩌구", "01012345678");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //관리자의 판매자 회원가입 리스트 조회
    @GetMapping
    public ResponseEntity getSellers(Pageable pageable) {

        List<SellerDto.Response> getSellers = List.of(
                new SellerDto.Response
                        (1L, "seller", "seller", "seller", "11111111111111", "서울시 어쩌구 저쩌구", "01012345678", SELLER_WAITING),
                new SellerDto.Response
                        (2L, "seller2", "seller2", "seller2", "22222222222222", "경기도 어쩌구 저쩌구", "01011112222", SELLER_APPROVE),
                new SellerDto.Response
                        (3L, "seller3", "seller3", "seller3", "33333333333333", "인천시 어쩌구 저쩌구", "01033334444", SELLER_REJECTED)
        );

        Page<SellerDto.Response> pageSellers = new PageImpl<>(getSellers, pageable,3);
        List<SellerDto.Response> responseList = pageSellers.getContent();

        return new ResponseEntity(new MultiResponseDto<>(responseList, pageSellers), HttpStatus.OK);
    }

    //관리자의 판매자 회원가입 정보 삭제
    @DeleteMapping("/admin/{seller-id}")
    public ResponseEntity deleteSeller(@PathVariable("seller-id") @Positive Long sellerId) {

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
