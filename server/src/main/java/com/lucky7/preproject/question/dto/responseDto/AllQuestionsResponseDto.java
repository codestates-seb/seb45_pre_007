package com.lucky7.preproject.question.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AllQuestionsResponseDto {
    private long id;
    private String title;
    private String content;
    private String user; // user의 userName 과 매핑해야 합니다.
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
}
