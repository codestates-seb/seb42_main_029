package com.k5.modudogcat.domain.admin.service;

import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.seller.repository.SellerRepository;
import com.k5.modudogcat.domain.seller.service.SellerService;
import com.k5.modudogcat.domain.user.entity.User;
import com.k5.modudogcat.domain.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final SellerRepository sellerRepository;

    private final UserRepository userRepository;

    private SellerService sellerService;

    public Page<Seller> findSellers(Pageable pageable) {
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());

        List<Seller> findSellers = sellerRepository.findAllBySellerStatus(Seller.SellerStatus.SELLER_WAITING);
        Page<Seller> pageSellers = new PageImpl<>(findSellers, of, findSellers.size());

        return pageSellers;
    }

    //회원가입 승인
    public Seller updateApprovalSellerStatus(Long sellerId) {
        Seller findSeller = sellerService.findVerifiedSellerById(sellerId);
        findSeller.setSellerStatus(Seller.SellerStatus.SELLER_APPROVE);
        sellerRepository.save(findSeller);
        return findSeller;
    }

    //회원가입 거절
    public Seller updateRejectedSellerStatus(Long sellerId) {
        Seller findSeller = sellerService.findVerifiedSellerById(sellerId);
        findSeller.setSellerStatus(Seller.SellerStatus.SELLER_REJECTED);
        return sellerRepository.save(findSeller);
    }

    public void updateToUser(User user) {
        user.setUserStatus(User.UserStatus.SELLER);
        userRepository.save(user);
    }
}
