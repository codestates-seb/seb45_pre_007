package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
public class UserPostDto {

    @NotBlank
    @Email
    private String userEmail;

    @NotBlank(message = "이름은 공백이 아니어야 합니다.")
    private String userName;

    @NotBlank
    private String hashedUserPassword;
}

