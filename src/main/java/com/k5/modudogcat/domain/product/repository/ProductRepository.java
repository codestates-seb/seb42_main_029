package com.k5.modudogcat.domain.product.repository;

import com.k5.modudogcat.domain.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByProductStatusNotLike(Product.ProductStatus productStatus);

    List<Product> findAllBySellerIdAndProductStatusNot(Long sellerId, Product.ProductStatus productDelete);

    Optional<Product> findByIdAndProductStatusNot(Long productId, Product.ProductStatus productDelete);
}
