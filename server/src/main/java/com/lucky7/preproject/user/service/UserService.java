package com.lucky7.preproject.user.service;

import com.lucky7.preproject.auth.utils.CustomAuthorityUtils;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; //passwordEncoder 추가

    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    public User createUser(User user){
        String encryptedPassword = passwordEncoder.encode(user.getHashedUserPassword());
        user.setHashedUserPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getUserEmail());
        user.setRoles(roles);

        User savedUser = userRepository.save(user);
        System.out.println("# Create Member in DB");

        return savedUser;
    }

    public User updateUser(User user){

        return null;
    }

    public User findUser(long userId) {

        return null;
    }

    public User deleteUser(long userId){

        return null;
    }

    public User findUserByEmail(String email) {
        Optional<User> optionalUser = userRepository.findByUserEmail(email);

        if (optionalUser.isPresent()) {
            return optionalUser.get();
        } else {
            // 사용자를 찾지 못한 경우에 대한 예외 처리를 수행하거나 원하는 방식으로 처리
            throw new RuntimeException("User not found");
        }
    }
}
