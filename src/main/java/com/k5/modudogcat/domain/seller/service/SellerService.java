package com.k5.modudogcat.domain.seller.service;

import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.seller.repository.SellerRepository;
import com.k5.modudogcat.domain.user.entity.User;
import com.k5.modudogcat.domain.user.repository.UserRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class SellerService {

    private final SellerRepository sellerRepository;

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public Seller createSeller(Seller seller) {
        verifiedByLoginId(seller);
        verifiedByregistrationNumber(seller);
        setEncodedPassword(seller);

        return sellerRepository.save(seller);

    }

    private void setEncodedPassword(Seller seller) {
        seller.setPassword(passwordEncoder.encode(seller.getPassword()));
    }

    //로그인 ID 검증
    private void verifiedByLoginId(Seller seller) {
        String loginId = seller.getLoginId();
        Optional<User> optionalSeller = userRepository.findByLoginId(loginId);
        optionalSeller.ifPresent(sell -> {
            throw new BusinessLogicException(ExceptionCode.USER_LOGIN_ID_EXISTS);
        });
    }

    //사업자등록번호 존재 여부 검증
    private void verifiedByregistrationNumber(Seller seller) {
        String registrationNumber = seller.getRegistrationNumber();
        Optional<Seller> optionalSeller = sellerRepository.findByRegistrationNumber(registrationNumber);
        optionalSeller.ifPresent(r -> {
            throw new BusinessLogicException(ExceptionCode.SELLER_REGISTRATION_NUMBER_EXISTS);
        });
    }

}
