package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.sql.Time;
import java.time.LocalDateTime;

@Getter
@Setter
public class UserResponseDto { //LocalDateTime 추가

    private long userId;
    private String userName;
    private String userEmail;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
}