package com.k5.modudogcat.domain.admin.service;

import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.seller.repository.SellerRepository;
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

    public Page<Seller> findSellers(Pageable pageable) {
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());

        List<Seller> findSellers = sellerRepository.findAllBySellerStatus(Seller.SellerStatus.SELLER_WAITING);
        Page<Seller> pageSellers = new PageImpl<>(findSellers, of, findSellers.size());

        return pageSellers;
    }
}
