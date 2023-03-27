package com.k5.modudogcat.domain.seller.controller;

import com.k5.modudogcat.domain.seller.dto.SellerDto;
import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.seller.mapper.SellerMapper;
import com.k5.modudogcat.domain.seller.service.SellerService;
import com.k5.modudogcat.dto.MultiResponseDto;
import com.k5.modudogcat.dto.SingleResponseDto;
import com.k5.modudogcat.util.UriCreator;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

import static com.k5.modudogcat.domain.seller.entity.Seller.SellerStatus.*;

@RestController
@RequestMapping("/sellers")
@RequiredArgsConstructor
public class SellerController {

    private final SellerMapper mapper;

    private final SellerService service;

    //판매자의 판매자 회원가입 신청
    @PostMapping
    public ResponseEntity postSeller(@Valid @RequestBody SellerDto.Post postDto) {

        Seller seller = mapper.sellerPostToSeller(postDto);
        Seller findSeller = service.createSeller(seller);
        Long sellerId = findSeller.getSellerId();
        URI location = UriCreator.createUri("/sellers/", sellerId);
        return ResponseEntity.created(location).build();
    }

    //판매자의 판매자 페이지 정보 변경 (주소, 전화번호, 이메일)
    @PatchMapping("/{seller-id}")
    public ResponseEntity patchSeller(@PathVariable("seller-id") @Positive Long sellerId,
                                      @RequestBody SellerDto.Patch patch) {

        patch.setSellerId(sellerId);
        Seller seller = mapper.sellerPatchToSeller(patch);
        Seller updateSeller = service.updateSeller(seller);
        SellerDto.Response response = mapper.sellerToSellerResponse(updateSeller);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    //판매자의 판매자 페이지 조회
    @GetMapping("/my-page")
    public ResponseEntity getSeller() {

        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Long sellerId = Long.parseLong(principal);
        Seller findSeller = service.findVerifiedSellerById(sellerId);
        SellerDto.Response response = mapper.sellerToSellerResponse(findSeller);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }
}
