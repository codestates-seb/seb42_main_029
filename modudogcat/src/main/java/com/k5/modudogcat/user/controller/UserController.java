package com.k5.modudogcat.user.controller;

import com.k5.modudogcat.dto.MultiResponseDto;
import com.k5.modudogcat.dto.SingleResponseDto;
import com.k5.modudogcat.user.Mapper.UserMapper;
import com.k5.modudogcat.user.dto.UserDto;
import com.k5.modudogcat.user.entity.User;

import com.k5.modudogcat.user.service.UserService;
import com.k5.modudogcat.util.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
@Validated
public class UserController {
    private final static String USER_DEFAULT_URL = "/users/";
    private final UserMapper mapper;
    private final UserService userService;

    @PostMapping
    public ResponseEntity postUser(@RequestBody UserDto.Post postDto){
        User user = mapper.userPostToUser(postDto);
        User findUser = userService.createUser(user);

        Long userId = findUser.getUserId();
        URI location = UriCreator.createUri(USER_DEFAULT_URL, userId);

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{user-id}")
    public ResponseEntity patchUser(@PathVariable("user-id") Long userId,
                                    @RequestBody UserDto.Patch patchDto){
        patchDto.setUserId(userId);
        User user = mapper.userPatchToUser(patchDto);
        User updateUser = userService.updateUser(user);
        UserDto.Response response = mapper.userToUserResponse(updateUser);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/my-page")
    public ResponseEntity getUser(){
        String principal = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        long userId = Long.parseLong(principal);
        User findUser = userService.findVerifiedUserById(userId);
        UserDto.Response response = mapper.userToUserResponse(findUser);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(Pageable pageable){
        Page<User> pageUsers = userService.findUsers(pageable);
        List<User> users = pageUsers.getContent();
        List<UserDto.Response> responses = mapper.usersToUsersResponse(users);

        return new ResponseEntity(new MultiResponseDto<>(
               responses, pageUsers), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") Long userId){
        userService.removeUser(userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
