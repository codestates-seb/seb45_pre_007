package com.lucky7.preproject.user.repository;

import com.lucky7.preproject.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUserEmail(String userEmail);
    //  데이터베이스에서 해당 사용자를 조회하기 위해 추가 UserDetailsService Class에서 사용

}
