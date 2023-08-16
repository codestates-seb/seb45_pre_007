package com.lucky7.preproject.question.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class SingleQuestionResponseDto {
    private long questionId;
    private String questionTitle;
    private String questionContent;
    private String questionUser;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private List<CommentDto> questionComments;   // CommentDto 생성 후에 담아줄 예정
}
