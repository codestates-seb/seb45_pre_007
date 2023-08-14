package com.lucky7.preproject.user.repository;

import com.lucky7.preproject.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {
}
