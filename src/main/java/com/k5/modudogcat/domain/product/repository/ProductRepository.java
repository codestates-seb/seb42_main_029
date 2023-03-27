package com.k5.modudogcat.domain.product.repository;

import com.k5.modudogcat.domain.product.entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findAllByProductStatusNotLike(Product.ProductStatus productStatus);
}
