package com.k5.modudogcat.domain.seller.mapper;

import com.k5.modudogcat.domain.seller.dto.SellerDto;
import com.k5.modudogcat.domain.seller.entity.Seller;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SellerMapper {

    //SellerDto.Post -> Seller
    Seller sellerPostToSeller(SellerDto.Post post);
}
