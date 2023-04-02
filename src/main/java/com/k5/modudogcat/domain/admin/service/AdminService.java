package com.k5.modudogcat.domain.admin.service;

import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.seller.repository.SellerRepository;
import com.k5.modudogcat.domain.seller.service.SellerService;
import com.k5.modudogcat.domain.user.entity.User;
import com.k5.modudogcat.domain.user.repository.UserRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import com.k5.modudogcat.security.util.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final SellerRepository sellerRepository;

    private final UserRepository userRepository;

    private final SellerService sellerService;

    private final CustomAuthorityUtils customAuthorityUtils;

    public Page<Seller> findSellers(Pageable pageable) {
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                Sort.by("createdAt").descending());

        Page<Seller> findSellers = sellerRepository.findAllBySellerStatus(Seller.SellerStatus.SELLER_WAITING, of);
        return findSellers;
    }

    //회원가입 승인
    @Transactional
    public Seller updateApprovalSellerStatus(Long sellerId) {
        Seller findSeller = findVerifiedSellerById(sellerId);
        findSeller.setSellerStatus(Seller.SellerStatus.SELLER_APPROVE);
        sellerRepository.save(findSeller);
        return findSeller;
    }

    //판매자 존재 여부 확인
    private Seller findVerifiedSellerById(Long sellerId) {
        Seller findSeller = sellerRepository.findById(sellerId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.SELLER_NOT_FOUND);
                });
        return findSeller;
    }

    //회원가입 거절
    public Seller updateRejectedSellerStatus(Long sellerId) {
        Seller findSeller = findVerifiedSellerById(sellerId);
        findSeller.setSellerStatus(Seller.SellerStatus.SELLER_REJECTED);
        return sellerRepository.save(findSeller);
    }

    //변경 userStatus
    public void updateToUser(User user) {
        List<String> roles = customAuthorityUtils.createRoles(user);
        user.setRoles(roles);
        userRepository.save(user);
    }

    //관리자 권한 확인
    public boolean verifiedHasAdminRole(Long userId) {
        Optional<User> user = userRepository.findById(userId);
        if(user.get().getRoles().equals("ADMIN")) {
           return true;
        }
        throw new BusinessLogicException(ExceptionCode.NOT_HAS_ADMIN_ROLE);
    }
}
