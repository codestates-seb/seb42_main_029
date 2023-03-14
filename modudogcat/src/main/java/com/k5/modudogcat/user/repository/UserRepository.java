package com.k5.modudogcat.user.repository;

import com.k5.modudogcat.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLoginId(String LoginId);
    Optional<User> findByEmail(String email);
}
