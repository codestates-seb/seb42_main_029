package com.k5.modudogcat.domain.admin.entity;

import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "admin")
@NoArgsConstructor
public class Admin {

    @Id
    private Long adminId;

    @Column
    private String loginId;

    @Column
    private String password;


}
