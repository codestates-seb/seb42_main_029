package com.k5.modudogcat.domain.product.controller;

import com.k5.modudogcat.domain.product.entity.productImage.ProductDetailImage;
import com.k5.modudogcat.domain.product.mapper.ProductMapper;
import com.k5.modudogcat.domain.product.dto.ProductDto;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.service.ProductService;
import com.k5.modudogcat.dto.MultiResponseDto;
import com.k5.modudogcat.dto.SingleResponseDto;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.net.URI;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductMapper mapper;
    private final ProductService productService;
    @Value("${config.domain}")
    private String domain;

    // 임시 상품 등록
    @PostMapping
    public ResponseEntity postProduct(@RequestPart(name = "post") ProductDto.Post postDto,
                                      @RequestPart(required = false) MultipartFile thumbnailImage,
                                      @RequestPart(required = false) List<MultipartFile> productDetailImages){
        Product product = mapper.productPostToProduct(postDto);
        Map<String, Object> thumbnailMap = mapper.multipartFileToThumbnailImage(thumbnailImage);
        List<ProductDetailImage> productDetailImagesList = mapper.multipartFilesToDetailsImages(productDetailImages);
        Product findProduct = productService.createProduct(product, thumbnailMap, productDetailImagesList);
        URI location = UriCreator.createUri("/products", findProduct.getProductId());

        return ResponseEntity.created(location)
                .body("ProductImage uploaded successfully");
    }

    @GetMapping("/{product-id}")
    public ResponseEntity getProduct(@PathVariable("product-id") Long productId){
        // todo : Seller 에 해당하는 Product를 조회하도록 수정필요
        Product findProduct = productService.findProduct(productId);
        ProductDto.Response response = mapper.productToResponse(findProduct, domain);

        return new ResponseEntity<>(
                new SingleResponseDto(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getProducts(Pageable pageable){
        Page<Product> productPages = productService.findProducts(pageable);
        List<Product> products = productPages.getContent();
        List<ProductDto.Response> responses = mapper.productsToResponses(products);

        return new ResponseEntity<>(
                new MultiResponseDto<>(responses, productPages), HttpStatus.OK);
    }
}
