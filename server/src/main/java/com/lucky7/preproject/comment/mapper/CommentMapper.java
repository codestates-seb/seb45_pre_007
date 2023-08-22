package com.lucky7.preproject.comment.mapper;

import com.lucky7.preproject.comment.dto.CommentResponseDto;
import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.entity.QuestionComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    AnswerComment commentRequestDtoToAnswerComment(CommentRequestDto commentRequestDto);
    QuestionComment commentRequestDtoToQuestionComment(CommentRequestDto commentRequestDto);
    @Mapping(source = "user.name", target = "user")
    CommentResponseDto answerCommentToCommentResponseDto(AnswerComment answerComment);
    @Mapping(source = "user.name", target = "user")
    CommentResponseDto questionCommentToCommentResponseDto(QuestionComment questionComment);
}
