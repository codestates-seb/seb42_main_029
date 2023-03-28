package com.k5.modudogcat.domain.admin.repository;

import com.k5.modudogcat.domain.admin.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
