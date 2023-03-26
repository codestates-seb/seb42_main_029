package com.k5.modudogcat.domain.user.entity;

import com.k5.modudogcat.audit.Auditable;
import com.k5.modudogcat.domain.review.entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "user_table")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class User extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;
    @Column(length = 20, nullable = false, unique = true)
    private String loginId;
    @Column(length = 20, nullable = false)
    private String name;
    @Column(nullable = false)
    private String password;
    @Column(nullable = false, unique = true)
    private String email;
    @Column(nullable = false)
    private String address;
    @Enumerated(value = EnumType.STRING)
    private UserStatus userStatus = UserStatus.USER_ACTIVE;
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
    public enum UserStatus {
        USER_ACTIVE("활동중"),
        USER_SLEEP("휴면계정"),
        USER_DELETE("삭제된계정");
        @Getter
        private final String status;
        UserStatus(String status){
            this.status = status;
        }
    }
}
