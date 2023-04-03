package com.k5.modudogcat.domain.product.entity.productImage;

import com.k5.modudogcat.domain.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequiredArgsConstructor
public class ProductImageController {
    private final ProductImageService productImageService;
    private final ProductService productService;
    @GetMapping("/thumbnails/{product-id}")
    public ResponseEntity<byte[]> getThumbnail(@PathVariable("product-id") Long productId){
        Map<String, Object> thumbnailMap = productService.findThumbnail(productId);
        byte[] thumbnailImage = (byte[]) thumbnailMap.get("파일");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf(
                (String) thumbnailMap.get("타입")));

        return new ResponseEntity<byte[]>(thumbnailImage, headers, HttpStatus.OK);
    }

    @GetMapping("/productDetailImages/{productDetailImages-id}")
    public ResponseEntity<byte[]> getProductDetailImages(@PathVariable("productDetailImages-id") Long pdImageId){
        ProductDetailImage pdImage = productImageService.findProductDetailImage(pdImageId);

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.valueOf(
                pdImage.getType()));

        return new ResponseEntity<byte[]>(pdImage.getImage(), headers, HttpStatus.OK);
    }
}
