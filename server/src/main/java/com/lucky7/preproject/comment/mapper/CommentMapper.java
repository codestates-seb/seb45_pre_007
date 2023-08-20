package com.lucky7.preproject.comment.mapper;

import com.lucky7.preproject.comment.dto.AnswerCommentResponseDto;
import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.dto.QuestionCommentResponseDto;
import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.entity.QuestionComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    @Mapping(source = "content", target = "answerCommentContent")
    AnswerComment commentRequestDtoToAnswerComment(CommentRequestDto commentRequestDto);
    @Mapping(source = "content", target = "questionCommentContent")
    QuestionComment commentRequestDtoToQuestionComment(CommentRequestDto commentRequestDto);
    @Mapping(source = "user.userName", target = "answerCommentUser")
    AnswerCommentResponseDto answerCommentToAnswerCommentResponseDto(AnswerComment answerComment);
    @Mapping(source = "user.userName", target = "questionCommentUser")
    QuestionCommentResponseDto questionCommentToQuestionCommentResponseDto(QuestionComment questionComment);
}
