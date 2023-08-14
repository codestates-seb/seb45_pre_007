package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class UserResponseDto {

    private long userId;
    private String userName;
    private String userEmail;

}


