package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class UserResponseDto { //LocalDateTime 추가
    private Long id;
    private String name;
    private String email;
    private String avatarImg;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
}