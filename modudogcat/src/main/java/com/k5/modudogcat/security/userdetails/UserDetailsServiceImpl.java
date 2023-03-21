package com.k5.modudogcat.security.userdetails;

import com.k5.modudogcat.exception.BusinessLogicException;
import com.k5.modudogcat.exception.ExceptionCode;
import com.k5.modudogcat.security.util.CustomAuthorityUtils;
import com.k5.modudogcat.user.entity.User;
import com.k5.modudogcat.user.repository.UserRepository;
import com.k5.modudogcat.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@RequiredArgsConstructor
@Component
public class UserDetailsServiceImpl implements UserDetailsService {
    private final UserService userService;
    private final CustomAuthorityUtils customAuthorityUtils;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User verifiedUserByLoginId = userService.findVerifiedUserByLoginId(username);

        return new UserDetailsImpl(verifiedUserByLoginId);
    }

    private final class UserDetailsImpl extends User implements UserDetails {
        UserDetailsImpl(User user){
            setUserId(user.getUserId());
            setLoginId(user.getLoginId());
            setPassword(user.getPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return customAuthorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getLoginId();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}
