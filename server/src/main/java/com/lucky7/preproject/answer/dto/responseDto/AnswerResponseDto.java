package com.lucky7.preproject.answer.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class AnswerResponseDto {
    private Long id;
    private String content;
    private String user;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private List<AnswerCommentDto> answerComments;
}
