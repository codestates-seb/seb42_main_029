package com.k5.modudogcat.user.service;

import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import com.k5.modudogcat.user.entity.User;
import com.k5.modudogcat.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user){
        verifiedByLoginId(user);
        verifiedByEmail(user);
        return userRepository.save(user);
    }

    public User updateUser(User user){
        Long userId = user.getUserId();
        User findUser = findVerifiedUserById(userId);

        Optional.ofNullable(user.getPassword())
                .ifPresent(newPassword -> findUser.setPassword(newPassword));
        Optional.ofNullable(user.getAddress())
                .ifPresent(newAddress -> findUser.setAddress(newAddress));

        return userRepository.save(findUser);
    }

    public User findVerifiedUserById(Long userId){
        return userRepository.findById(userId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
                });
    }
    public Page<User> findUsers(Pageable pageable){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());

        return userRepository.findAll(of);
    }
    private void verifiedByEmail(User user) {
        // 로그인 ID가 존재하는지 검증하는 메서드
        String email = user.getEmail();
        Optional<User> optionalUser = userRepository.findByEmail(email);
        optionalUser.ifPresent(s -> {
            throw new BusinessLogicException(ExceptionCode.USER_EMAIL_EXISTS);
        });
    }
    private void verifiedByLoginId(User user) {
        // 로그인 ID가 존재하는지 검증하는 메서드
        String LoginId = user.getLoginId();
        Optional<User> optionalUser = userRepository.findByLoginId(LoginId);
        optionalUser.ifPresent(s -> {
            throw new BusinessLogicException(ExceptionCode.USER_LOGIN_ID_EXISTS);
        });
    }


}
