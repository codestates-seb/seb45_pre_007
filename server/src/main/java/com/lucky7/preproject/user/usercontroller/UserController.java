package com.lucky7.preproject.user.usercontroller;

import com.lucky7.preproject.user.dto.UserPatchDto;
import com.lucky7.preproject.user.dto.UserPostDto;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.mapper.UserMapper;
import com.lucky7.preproject.user.userservice.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

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
    public ResponseEntity postUser(@Valid @RequestBody UserPostDto userPostDto){
        User user = mapper.userPostToUser(userPostDto);

        User response = userService.createUser(user);

        return new ResponseEntity<>(mapper.userToUserResponseDto(response),
                HttpStatus.CREATED);
    }

    @PatchMapping("/users{userId}")
    private ResponseEntity patchUser(@PathVariable("userId")
                                     @Positive long userId,
                                     @Valid @RequestBody UserPatchDto userPatchDto){
        userPatchDto.setUserId(userId);

        User response = userService.updateUser(mapper.userPatchToUser(userPatchDto));

        return new ResponseEntity<>(mapper.userToUserResponseDto(response),
                HttpStatus.OK);
    }

    @GetMapping("/users/{userId}")
    private ResponseEntity getUser(@PathVariable("userId") @Positive long userId){
        User response = userService.findMember(userId);

        return new ResponseEntity<>(mapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    @DeleteMapping("/users/{userId}")
    private ResponseEntity deleteUser(@PathVariable("userId") @Positive long userId){
        userService.deleteUser(userId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
