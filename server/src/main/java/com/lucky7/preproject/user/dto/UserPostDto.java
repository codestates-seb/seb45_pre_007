package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter //유효성 제거
public class UserPostDto {
    private String email;
    private String name;
    private String password;
}

