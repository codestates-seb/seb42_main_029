package com.k5.modudogcat.domain.product.service;

import com.k5.modudogcat.domain.product.entity.Product;
import com.k5.modudogcat.domain.product.entity.productImage.ProductDetailImage;
import com.k5.modudogcat.domain.product.repository.ProductRepository;
import com.k5.modudogcat.domain.user.entity.User;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;
    @Transactional
    public Product createProduct(Product product, Map<String, Object> thumbnailMap, List<ProductDetailImage> productDetailImageList){
        if(thumbnailMap != null){
            product.setThumbnailImage((byte[]) thumbnailMap.get("파일"));
            product.setThumbnailImageType((String) thumbnailMap.get("타입"));
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
    // todo: sellerId를 이용해서 조회하는 메서드도 필요함.
    public Product findProduct(Long productId){
        Optional<Product> optionalProduct = productRepository.findById(productId);
        Product verifiedProduct = optionalProduct.orElseThrow(() -> {
            throw new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND);
        });

        verifiedActiveProduct(verifiedProduct);
        return verifiedProduct;
    }
    public Page<Product> findProducts(Pageable pageable){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                Sort.by("createdAt").descending());
        Page<Product> findProducts = productRepository.findAllByProductStatusNotLike(Product.ProductStatus.PRODUCT_DELETE, of);

        return findProducts;
    }

    public void removeProduct(Long productId, Long sellerId, boolean adminRole){
        Product findProduct = findProduct(productId);
        verifiedCorrectSellerAndAdmin(sellerId, findProduct, adminRole);
        findProduct.setProductStatus(Product.ProductStatus.PRODUCT_DELETE);
        productRepository.save(findProduct);
    }

    //상품의 판매자 여부, 관리자 여부 확인
    private void verifiedCorrectSellerAndAdmin(Long sellerId, Product product, boolean adminRole) {
        if(!(product.getSeller().getSellerId() == sellerId || adminRole)) {
            throw new BusinessLogicException(ExceptionCode.SELLER_NOT_ALLOWED);
        }
    }

    public void verifiedActiveProduct(Product verifiedProduct){
        if(verifiedProduct.getProductStatus().getStatus().equals("삭제된상품")){
            throw new BusinessLogicException(ExceptionCode.REMOVED_PRODUCT);
        }
    }

    public Map<String, Object> findThumbnail(Long productId){
        Map<String, Object> thumbnailMap = new HashMap<>();
        Product findProduct = findProduct(productId);
        thumbnailMap.put("파일",findProduct.getThumbnailImage());
        thumbnailMap.put("타입",findProduct.getThumbnailImageType());
        return thumbnailMap;
    }
}
