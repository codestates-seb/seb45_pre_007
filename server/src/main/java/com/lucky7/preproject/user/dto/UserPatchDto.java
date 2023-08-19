package com.lucky7.preproject.user.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter //NoArgsConstructor 제거
public class UserPatchDto {
        private long id;
        private String email;
        private String name;
}


