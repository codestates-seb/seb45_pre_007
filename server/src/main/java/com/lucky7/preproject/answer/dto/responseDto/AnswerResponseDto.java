package com.lucky7.preproject.answer.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class AnswerResponseDto {
    private Long answerId;
    private String answerContent;
    private String answerUser;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private List<CommentDto> answerComments;
}
