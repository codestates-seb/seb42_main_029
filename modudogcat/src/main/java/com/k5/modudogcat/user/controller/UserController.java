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
        UserDto.Response response =
                new UserDto.Response(userId,
                        "honghong",
                        "홍길동",
                        "changePW",
                        "abc@naver.com",
                        "바뀐주소",
                        User.UserStatus.USER_SLEEP);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") Long userId){

        UserDto.Response response =
                new UserDto.Response(userId,
                        "honghong",
                        "홍길동",
                        "hong1234",
                        "hong123@google.com",
                        "서울특별시 구로구 구일로4길 57",
                        User.UserStatus.USER_ACTIVE);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getUsers(Pageable pageable){
        List<User> users = new ArrayList<>();
        UserDto.Response response1 =
                new UserDto.Response(1L,
                        "honghong",
                        "홍길동",
                        "hong1234",
                        "hong123@google.com",
                        "서울특별시 구로구 구일로4길 57",
                        User.UserStatus.USER_ACTIVE);
        UserDto.Response response2 =
                new UserDto.Response(2L,
                        "honghong",
                        "김규하",
                        "kim1234",
                        "kimm123@google.com",
                        "서울특별시 구로구 새말로9길",
                        User.UserStatus.USER_ACTIVE);

        Page<UserDto.Response> pageUsers =
                new PageImpl<>(List.of(response1, response2),
                       pageable,2);

        return new ResponseEntity(new MultiResponseDto<>(
                List.of(response1, response2), pageUsers), HttpStatus.OK);
    }

    @DeleteMapping("/{user-id}")
    public ResponseEntity deleteUser(@PathVariable("user-id") Long userId){

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
