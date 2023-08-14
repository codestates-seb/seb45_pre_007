package com.lucky7.preproject.auth.userdetail;

import com.lucky7.preproject.auth.utils.CustomAuthorityUtils;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.repository.UserRepository;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import javax.swing.text.html.Option;
import java.util.Collection;
import java.util.Optional;

public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {
    //DB에서 조회한 인증 정보를 기반으로 인증을 처리하는 Class
    private final UserRepository userRepository;
    private final CustomAuthorityUtils authorityUtils;

    public UserDetailsService(UserRepository userRepository, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.authorityUtils = authorityUtils;
    }


    @Override
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
        Optional<User> optionUser = userRepository.findByUserEmail(userEmail);
        User findUser = optionUser.orElseThrow(() -> new UsernameNotFoundException("User not found"));


        return new userDetails(findUser);
    }

    private final class userDetails extends User implements UserDetails {
        userDetails(User user) {
            setUserId(user.getUserId());
            setUserEmail(user.getUserEmail());
            setHashedUserPassword(user.getHashedUserPassword());
            setRoles(user.getRoles());
        }

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getPassword() {
            return getHashedUserPassword();
        }

        @Override
        public String getUsername() {
            return getUserEmail();
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
