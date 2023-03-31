package com.k5.modudogcat.domain.cart.repository;

import com.k5.modudogcat.domain.cart.entity.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart,Long> {
    Optional<Cart> findByUserUserId(Long userId);
}