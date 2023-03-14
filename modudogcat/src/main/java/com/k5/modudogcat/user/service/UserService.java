package com.k5.modudogcat.user.service;

import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import com.k5.modudogcat.user.entity.User;
import com.k5.modudogcat.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

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
        User findUser = userRepository.findById(userId)
                .orElseThrow(() -> {
                    throw new BusinessLogicException(ExceptionCode.USER_NOT_FOUND);
                });

        verifiedActiveUser(findUser);
        return findUser;
    }

    private static void verifiedActiveUser(User findUser) {
        if(findUser.getUserStatus().getStatus().equals("삭제된계정")){
            throw new BusinessLogicException(ExceptionCode.REMOVED_USER);
        }else if(findUser.getUserStatus().getStatus().equals("휴면계정")){
            throw new BusinessLogicException(ExceptionCode.SLEEPER_USER);
        }
    }

    public Page<User> findUsers(Pageable pageable){
        PageRequest of = PageRequest.of(pageable.getPageNumber() - 1,
                pageable.getPageSize(),
                pageable.getSort());
        // Todo: 페이징 되면서, Active한 User만 가져오는 쿼리
        return userRepository.findAll(of);
    }

    public void removeUser(Long userId){
        User findUser = findVerifiedUserById(userId);
        verifiedActiveUser(findUser);

        findUser.setUserStatus(User.UserStatus.USER_DELETE);
        userRepository.save(findUser);
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
