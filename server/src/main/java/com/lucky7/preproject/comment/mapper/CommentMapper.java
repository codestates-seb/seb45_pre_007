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
    AnswerComment commentRequestDtoToAnswerComment(CommentRequestDto commentRequestDto);
    QuestionComment commentRequestDtoToQuestionComment(CommentRequestDto commentRequestDto);
    @Mapping(source = "user.name", target = "user")
    AnswerCommentResponseDto answerCommentToAnswerCommentResponseDto(AnswerComment answerComment);
    @Mapping(source = "user.name", target = "user")
    QuestionCommentResponseDto questionCommentToQuestionCommentResponseDto(QuestionComment questionComment);
}
