package com.k5.modudogcat.domain.admin.entity;

import com.k5.modudogcat.domain.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.*;

@Entity(name = "admin")
@Setter
@Getter
@NoArgsConstructor
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adminId;

    @Column
    private String loginId;

    @Column
    private String password;

    @OneToOne(mappedBy = "admin")
    private User user;

}
