package com.lucky7.preproject.auth.logindto;

import lombok.Getter;
import org.springframework.web.bind.annotation.GetMapping;

@Getter //로그인할 때 필요한 정보가 있는 Dto
public class LoginDto {
    private String userEmail;
    private String password;
}
