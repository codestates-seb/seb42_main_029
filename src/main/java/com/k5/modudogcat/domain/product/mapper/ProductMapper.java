package com.k5.modudogcat.domain.product.mapper;

import com.k5.modudogcat.domain.product.dto.ProductDto;
import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.entity.productImage.ProductDetailImage;
import org.mapstruct.Mapper;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productPostToProduct(ProductDto.Post postDto);
    default List<ProductDto.Response> productsToResponses(List<Product> products, String domain){
        if ( products == null ) {
            return null;
        }

        List<ProductDto.Response> list = new ArrayList<ProductDto.Response>( products.size() );
        for ( Product product : products ) {
            list.add( productToResponse( product, domain ) );
        }

        return list;
    }
    default Map<String,Object> multipartFileToThumbnailImage(MultipartFile thumbnailDto)  {
        if(thumbnailDto == null){
            return null;
        }
        try {
            Map<String, Object> thumbnailMap = new HashMap<String, Object>();
            thumbnailMap.put("파일", thumbnailDto.getBytes());
            thumbnailMap.put("타입", thumbnailDto.getContentType());
            return thumbnailMap;
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

    default ProductDto.Response productToResponse(Product product, String domain){
        if(product == null){
            return null;
        }
        ProductDto.Response response = new ProductDto.Response();
        // 썸네일 사진 요청 링크
        String thumbnailLink;
        if(product.getThumbnailImage() == null){
            thumbnailLink = null;
        }else{
            thumbnailLink = domain +"/thumbnails/"+ product.getProductId();
        }

        // 상품 세부페이지 사진 요청 링크
        List<String> productDetailLinks = product.getProductDetailImages().stream()
                .map(image -> {
                    String link = domain + "/productDetailImages/" + image.getDetailImageId();
                    return link;
                })
                .collect(Collectors.toList());

        response.setProductId( product.getProductId() );
        response.setName( product.getName() );
        response.setThumbnailLink( thumbnailLink );
        response.setProductDetailLinks( productDetailLinks );
        response.setProductDetail(product.getProductDetail() );
        response.setPrice( product.getPrice() );
        response.setStock( product.getStock() );
        response.setProductStatus( product.getProductStatus() );

        return response;
    }
}
