package com.k5.modudogcat.domain.cart.controller;

import com.k5.modudogcat.domain.cart.dto.CartDto;
import com.k5.modudogcat.domain.cart.entity.CartProduct;
import com.k5.modudogcat.domain.cart.mapper.CartMapper;
import com.k5.modudogcat.domain.cart.service.CartService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping("/carts")
@Setter
@Getter
public class CartController {
    private final CartService cartService;
    private final CartMapper cartMapper;
    @Value("${config.domain}")
    private String domain;
    // 장바구니에 상품 등록요청
    @PostMapping("/products/{product-id}")
    public ResponseEntity postProducts(@PathVariable("product-id") Long productId){

        Long userId = getUserPrincipleByJWT();

        cartService.addToCart(userId, productId);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    // 장바구니 조회
    @GetMapping
    public ResponseEntity getCartProducts(Pageable pageable){
        Long userId = getUserPrincipleByJWT();
        Long cartId = cartService.findVerifedCart(userId).getCartId();
        Page<CartProduct> cartProductPages = cartService.findCartProducts(pageable, cartId);
        List<CartProduct> findCartProducts = cartProductPages.getContent();
        CartDto.Response response = cartMapper.cartProductsToResponse(findCartProducts, cartId, domain);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    // 장바구니의 상품 개수 추가 v1
    @PatchMapping("/products/{product-id}/plus")
    public ResponseEntity plusProductCount(@PathVariable("product-id") Long productId) {
        Long userId = getUserPrincipleByJWT();
        Long cartId = cartService.findVerifedCart(userId).getCartId();
        cartService.plusCount(productId, cartId);

        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/products/{product-id}/minus")
    public ResponseEntity minusProductCount(@PathVariable("product-id") Long productId) {
        Long userId = getUserPrincipleByJWT();
        Long cartId = cartService.findVerifedCart(userId).getCartId();
        cartService.minusCount(productId, cartId);

        return new ResponseEntity(HttpStatus.OK);
    }


    // 장바구니 삭제
    private Long getUserPrincipleByJWT(){
        return Long.parseLong((String) SecurityContextHolder.getContext().getAuthentication().getPrincipal());
    }
}
