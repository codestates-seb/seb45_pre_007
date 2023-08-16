package com.lucky7.preproject.comment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QuestionCommentResponseDto {
    private Long questionCommentId;
    private String questionCommentUser;
    private String questionCommentContent;
    private String createdAt;
    private String lastModifiedAt;
}
