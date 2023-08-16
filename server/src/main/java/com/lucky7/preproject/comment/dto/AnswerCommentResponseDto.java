package com.lucky7.preproject.comment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AnswerCommentResponseDto {
    private Long answerCommentId;
    private String answerCommentUser;
    private String answerCommentContent;
    private String createdAt;
    private String lastModifiedAt;
}
