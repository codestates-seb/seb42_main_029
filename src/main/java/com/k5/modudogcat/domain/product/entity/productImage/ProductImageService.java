package com.k5.modudogcat.domain.product.entity.productImage;

import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductImageService {
    private final ProductImageRepository productImageRepository;

    public ProductDetailImage findProductDetailImage(Long pdImageId){
        Optional<ProductDetailImage> optionalPdImage = productImageRepository.findById(pdImageId);
        ProductDetailImage findPdImage = optionalPdImage.orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.IMAGE_NOT_FOUND);
        });
        return findPdImage;
    }
}
