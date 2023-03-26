package com.k5.modudogcat.domain.seller.controller;

import com.k5.modudogcat.domain.seller.dto.SellerDto;
import com.k5.modudogcat.dto.MultiResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
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

    //판매자의 판매자 회원가입 신청
    @PostMapping
    public ResponseEntity postSeller(@RequestBody SellerDto.Post postDto) {

        return ResponseEntity.created(URI.create("/sellers/1")).build();
    }

    //판매자의 판매자 페이지 정보 변경 (주소, 전화번호)
    @PatchMapping("/{seller-id}")
    public ResponseEntity<SellerDto.Response> patchSeller(@PathVariable("seller-id") @Positive Long sellerId) {

        SellerDto.Patch patch = new SellerDto.Patch(sellerId, "서울시 어쩌구2 저쩌구2", "01011112222");

        SellerDto.Response response = new SellerDto.Response
                (patch.getSellerId(), "seller", "seller", "seller", "12345678901234", patch.getAddress(), patch.getPhone(), "신한", "12345678901234");

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //판매자의 판매자 페이지 조회
    @GetMapping("/{seller-id}")
    public ResponseEntity<SellerDto.Response> getSeller(@PathVariable("seller-id") @Positive Long sellerId) {

        SellerDto.Response response = new SellerDto.Response
                (sellerId, "seller", "seller", "seller", "12345678901234", "서울시 어쩌구 저쩌구", "01012345678", "신한", "12345678901234");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
