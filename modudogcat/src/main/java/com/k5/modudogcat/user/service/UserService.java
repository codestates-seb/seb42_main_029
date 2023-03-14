package com.k5.modudogcat.user.service;

import com.k5.modudogcat.user.entity.User;
import com.k5.modudogcat.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public User createUser(User user){
        // TODO: 회원 검증 로직 - DB에 회원이 있는지 확인한다.
        verifiedUserEmail(user);

        return userRepository.save(user);
    }

    private void verifiedUserEmail(User user) {
        String LoginId = user.getLoginId();
        Optional<User> optionalUser = userRepository.findByLoginId(LoginId);
    }
}
