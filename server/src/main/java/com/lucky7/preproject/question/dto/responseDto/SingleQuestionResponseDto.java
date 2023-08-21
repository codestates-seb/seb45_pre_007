package com.lucky7.preproject.question.dto.responseDto;

import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.entity.QuestionComment;
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
    private String avatarImg;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
    private List<QuestionCommentDto> questionComments;
}
