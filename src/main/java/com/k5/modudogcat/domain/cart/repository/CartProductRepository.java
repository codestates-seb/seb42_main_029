package com.k5.modudogcat.domain.cart.repository;

import com.k5.modudogcat.domain.cart.entity.CartProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartProductRepository extends JpaRepository<CartProduct, Long> {
    Optional<CartProduct> findByProductProductIdAndCartCartId(Long productId, Long cartId);
    List<CartProduct> findAllByCartCartId(Long cartId);
    void deleteByProductProductIdAndCartCartId(Long productId, Long cartId);
}