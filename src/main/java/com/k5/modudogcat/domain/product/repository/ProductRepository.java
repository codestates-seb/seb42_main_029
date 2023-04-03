package com.k5.modudogcat.domain.product.repository;

import com.k5.modudogcat.domain.product.entity.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Pageable;
import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    Page<Product> findAllByProductStatusNotLike(Product.ProductStatus productStatus, Pageable pageable);

    Page<Product> findAllBySellerSellerIdAndProductStatusNotLike(Long sellerId, Product.ProductStatus productDelete, Pageable pageable);

    List<Product> findBySellerSellerId(Long sellerId);
}
