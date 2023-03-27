package com.k5.modudogcat.domain.product.controller;

import com.k5.modudogcat.domain.product.entity.productDetailImage.ProductDetailImage;
import com.k5.modudogcat.domain.product.mapper.ProductMapper;
import com.k5.modudogcat.domain.product.dto.ProductDto;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.service.ProductService;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductMapper mapper;
    private final ProductService productService;

    // 임시 상품 등록
    @PostMapping
    public ResponseEntity postProduct(@RequestPart(name = "post") ProductDto.Post postDto,
                                      @RequestPart(required = false) MultipartFile thumbnailImage,
                                      @RequestPart(required = false) List<MultipartFile> productDetailImages){
        Product product = mapper.productPostToProduct(postDto);
        byte[] thumbnail = mapper.multipartFileToThumbnailImage(thumbnailImage);
        List<ProductDetailImage> productDetailImagesList = mapper.multipartFilesToDetailsImages(productDetailImages);
        Product findProduct = productService.createProduct(product, thumbnail, productDetailImagesList);
        URI location = UriCreator.createUri("/products", findProduct.getProductId());

        return ResponseEntity.created(location)
                .body("ProductImage uploaded successfully");
    }

}
