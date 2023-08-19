package com.lucky7.preproject.comment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionCommentResponseDto {
    private Long id;
    private String content;
    private String user;
    private String createdAt;
    private String lastModifiedAt;
}
