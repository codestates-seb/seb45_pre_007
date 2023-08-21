package com.lucky7.preproject.answer.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerCommentDto {
    private Long answerCommentId;
    private Long commentUser;
    private String commentContent;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
}
