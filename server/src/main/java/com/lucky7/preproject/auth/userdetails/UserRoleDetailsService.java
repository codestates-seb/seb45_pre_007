package com.lucky7.preproject.auth.userdetails;

import com.lucky7.preproject.auth.utils.CustomAuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public class UserRoleDetailsService implements UserDetailsService {
    //DB에서 조회한 인증 정보를 기반으로 인증을 처리하는 Class
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        return null;
    }
}
