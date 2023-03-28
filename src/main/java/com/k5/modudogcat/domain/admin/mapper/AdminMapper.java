package com.k5.modudogcat.domain.admin.mapper;

import com.k5.modudogcat.domain.admin.dto.AdminDto;
import com.k5.modudogcat.domain.seller.entity.Seller;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AdminMapper {

    List<AdminDto.Response> sellersToSellersResponse(List<Seller> sellers);
}
