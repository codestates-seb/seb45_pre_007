package com.lucky7.preproject.user.service;

import com.lucky7.preproject.auth.utils.CustomAuthorityUtils;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.mapstruct.control.MappingControl.Use;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; //passwordEncoder 추가
    private final CustomAuthorityUtils authorityUtils;

    public User createUser(User user){
        String encryptedPassword = passwordEncoder.encode(user.getHashedPassword());
        user.setHashedPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

        User savedUser = userRepository.save(user);
        System.out.println("# Create Member in DB");

        return savedUser;
    }

    public User updateUser(User user){
        Optional<User> optionalFoundUser = userRepository.findById(user.getId());
        User foundUser = optionalFoundUser.orElse(null);

        Optional.ofNullable(user.getEmail())
                .ifPresent(email -> foundUser.setEmail(email));
        Optional.ofNullable(user.getName())
                .ifPresent(name -> foundUser.setName(name));

        return userRepository.save(foundUser);
    }

    public User findUser(long userId) {

        return userRepository.findById(userId).orElse(null);
    }

    public void deleteUser(long userId){
        userRepository.deleteById(userId);
    }

    public User findByEmail(String email) {
        Optional<User> optionalUser = userRepository.findByEmail(email);

        return optionalUser.orElse(null);
    }
}
