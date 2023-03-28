package com.k5.modudogcat.domain.user.service;

import com.k5.modudogcat.domain.user.repository.UserRepository;
import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import com.k5.modudogcat.security.util.CustomAuthorityUtils;
import com.k5.modudogcat.domain.user.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils customAuthorityUtils;

    public User createUser(User user){
        verifiedByLoginId(user);
        verifiedByEmail(user);
        setEncodedPassword(user);
        setDefaultRole(user);
        // todo : Roles가 관리자면 관리자 객체를 생성시켜 넣고 판매자면 판매자 객체를 생성시켜 넣기
        // UserRoles 클래스와 UserAuthenticationSuccessHandler.sendAuthorization() 참고!
        return userRepository.save(user);
    }

    private void setDefaultRole(User user) {
        List<String> roles = customAuthorityUtils.createRoles(user.getLoginId());
        user.setRoles(roles);
//        user.getRoles().add("USER");
    }

    private void setEncodedPassword(User user){
        user.setPassword(passwordEncoder.encode(user.getPassword()));
    }

    public User updateUser(User user){
        Long userId = user.getUserId();
        User findUser = findVerifiedUserById(userId);

        Optional.ofNullable(user.getPassword())
                .ifPresent(newPassword -> findUser.setPassword(passwordEncoder.encode(newPassword)));
        Optional.ofNullable(user.getAddress())
                .ifPresent(newAddress -> findUser.setAddress(newAddress));
        Optional.ofNullable(user.getEmail())
                .ifPresent(newEmail -> findUser.setEmail(newEmail));

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

    public User findVerifiedUserByLoginId(String loginId){
        User findUser = userRepository.findByLoginId(loginId)
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
        // Active한 User들만 가져온 후, 페이징 객체로 생성
        List<User> findUsers = userRepository.findAllByUserStatus(User.UserStatus.USER_ACTIVE);
        Page<User> pageUsers = new PageImpl<>(findUsers, of, findUsers.size());

        return pageUsers;
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
