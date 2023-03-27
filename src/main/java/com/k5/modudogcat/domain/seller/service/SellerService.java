package com.k5.modudogcat.domain.seller.service;

import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.seller.repository.SellerRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SellerService {

    private final SellerRepository repository;

    private final PasswordEncoder passwordEncoder;

    public Seller createSeller(Seller seller) {
        verifiedByLoginId(seller);
        setEncodedPassword(seller);

        return repository.save(seller);

    }

    private void setEncodedPassword(Seller seller) {
        seller.setPassword(passwordEncoder.encode(seller.getPassword()));
    }

    private void verifiedByLoginId(Seller seller) {
        String LoginId = seller.getLoginId();
        Optional<Seller> optionalSeller = repository.findByLoginId(LoginId);
        optionalSeller.ifPresent(seller1 -> {
            throw new BusinessLogicException(ExceptionCode.SELLER_NOT_FOUND);
        });
    }

}
