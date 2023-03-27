package com.k5.modudogcat.domain.seller.repository;

import com.k5.modudogcat.domain.seller.entity.Seller;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SellerRepository extends JpaRepository<Seller, Long> {

    Optional<Seller> findByRegistrationNumber(String registrationNumber);
}
