package com.k5.modudogcat.domain.admin.mapper;

import com.k5.modudogcat.domain.admin.dto.AdminDto;
import com.k5.modudogcat.domain.seller.entity.Seller;
import com.k5.modudogcat.domain.user.dto.UserDto;
import com.k5.modudogcat.domain.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AdminMapper {

    List<AdminDto.Response> sellersToAdminResponseDto(List<Seller> sellers);

    AdminDto.Response sellerToAdminResponseDto(Seller updateApproval);

    User sellerUpdateDtoToUser(AdminDto.Update updateToUser);

    AdminDto.Update sellerToSellerUpdateDto(Seller updateApproval);
}
