package com.k5.modudogcat.domain.product.mapper;

import com.k5.modudogcat.domain.product.dto.ProductDto;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.entity.productDetailImage.ProductDetailImage;
import org.mapstruct.Mapper;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productPostToProduct(ProductDto.Post postDto);
    default byte[] multipartFileToThumbnailImage(MultipartFile thumbnailDto)  {
        if(thumbnailDto == null){
            return null;
        }
        try {
            return thumbnailDto.getBytes();
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    default List<ProductDetailImage> multipartFilesToDetailsImages(List<MultipartFile> productDetailImages){
        if(productDetailImages == null){
            return null;
        }
        List<ProductDetailImage> productDetailImageList = productDetailImages.stream()
                .map(multipartFile -> {
                    ProductDetailImage productDetailImage = new ProductDetailImage();
                    try {
                        productDetailImage.setImage(multipartFile.getBytes());
                        productDetailImage.setType(multipartFile.getContentType());
                    } catch (IOException e) {
                        throw new RuntimeException(e);
                    }
                    return productDetailImage;
                })
                .collect(Collectors.toList());

        return productDetailImageList;
    }
}
