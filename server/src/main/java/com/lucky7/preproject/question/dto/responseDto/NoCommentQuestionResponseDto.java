package com.lucky7.preproject.question.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class NoCommentQuestionResponseDto {
    private Long id;
    private String title;
    private String content;
    private String user; // user의 userName 과 매핑해야 합니다.
    private String avatarImg;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
}
