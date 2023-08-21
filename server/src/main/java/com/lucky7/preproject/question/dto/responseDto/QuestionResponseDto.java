package com.lucky7.preproject.question.dto.responseDto;

import com.lucky7.preproject.comment.dto.CommentResponseDto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
public class QuestionResponseDto {
    private long id;
    private String title;
    private String content;
    private String user;
    private String avatarImg;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private List<CommentResponseDto> questionComments;
}
