package com.k5.modudogcat.domain.product.service;

import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.entity.productDetailImage.ProductDetailImage;
import com.k5.modudogcat.domain.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    @Transactional
    public Product createProduct(Product product, byte[] thumbnail, List<ProductDetailImage> productDetailImageList){
        if(thumbnail != null){
            product.setThumbnailImage(thumbnail);
        }
        Product savedProduct = productRepository.save(product);
        // product_id 값이 안들어
        if(productDetailImageList != null){
            List<ProductDetailImage> collect = productDetailImageList.stream()
                    .map(image -> {
                        savedProduct.addProductDetailImage(image);
                        return image;
                    })
                    .collect(Collectors.toList());
        }

        return savedProduct;
    }
}
