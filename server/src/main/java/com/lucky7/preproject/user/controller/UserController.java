package com.lucky7.preproject.user.controller;

import com.lucky7.preproject.user.dto.UserPatchDto;
import com.lucky7.preproject.user.dto.UserPostDto;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.mapper.UserMapper;
import com.lucky7.preproject.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postUser(@RequestBody UserPostDto userPostDto){
        User user = mapper.userPostToUser(userPostDto);

        User response = userService.createUser(user);

        return new ResponseEntity<>(mapper.userToUserResponseDto(response),
                HttpStatus.CREATED);
    }

    @PatchMapping("{userId}")
    private ResponseEntity patchUser(@PathVariable long userId, @RequestBody UserPatchDto userPatchDto){
        userPatchDto.setUserId(userId);

        User response = userService.updateUser(mapper.userPatchToUser(userPatchDto));

        return new ResponseEntity<>(mapper.userToUserResponseDto(response),
                HttpStatus.OK);
    }

    @GetMapping("{userId}")
    private ResponseEntity getUser(@PathVariable long userId){
        User response = userService.findUser(userId);

        return new ResponseEntity<>(mapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("{userId}")
    private ResponseEntity deleteUser(@PathVariable long userId){
        userService.deleteUser(userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
