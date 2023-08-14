package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor //의존성 제거
public class UserPatchDto {
        private long userId;
        private String userEmail;
        private String userName;
}


