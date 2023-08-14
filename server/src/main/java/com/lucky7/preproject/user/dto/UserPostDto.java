package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter //유효성 제거
public class UserPostDto {
    private String userEmail;
    private String userName;
    private String hashedUserPassword;
}

