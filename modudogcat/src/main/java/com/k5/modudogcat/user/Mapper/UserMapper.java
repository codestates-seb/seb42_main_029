package com.k5.modudogcat.user.Mapper;

import com.k5.modudogcat.user.dto.UserDto;
import com.k5.modudogcat.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostToUser(UserDto.Post postDto);
    User userPatchToUser(UserDto.Patch patchDto);
    UserDto.Response userToUserResponse(User user);
    List<UserDto.Response> usersToUsersResponse(List<User> userList);
}
