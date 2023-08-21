package com.lucky7.preproject.answer.mapper;

import com.lucky7.preproject.answer.dto.AnswerRequestDto;
import com.lucky7.preproject.answer.dto.AnswerResponseDto;
import com.lucky7.preproject.answer.entity.Answer;
import com.lucky7.preproject.comment.dto.CommentResponseDto;
import com.lucky7.preproject.comment.entity.AnswerComment;
import org.mapstruct.Mapper;

import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    @Mapping(source = "user.name", target = "user")
    @Mapping(source = "user.avatarImg", target = "avatarImg")
    AnswerResponseDto answerToAnswerDto(Answer answer);
    Answer answerDtoToAnswer(AnswerRequestDto answerRequestDto);
    @Mapping(source = "user.name", target = "user")
    CommentResponseDto answerCommentToCommentResponseDto(AnswerComment answerComment);
}
