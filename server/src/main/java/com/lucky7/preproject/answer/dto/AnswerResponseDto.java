package com.lucky7.preproject.answer.dto;

import com.lucky7.preproject.comment.dto.CommentResponseDto;
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
    private String avatarImg;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private List<CommentResponseDto> answerComments;
}
