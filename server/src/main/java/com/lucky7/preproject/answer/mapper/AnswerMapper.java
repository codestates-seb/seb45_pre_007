package com.lucky7.preproject.answer.mapper;

import com.lucky7.preproject.answer.dto.requestDto.AnswerDto;
import com.lucky7.preproject.answer.dto.responseDto.AnswerCommentDto;
import com.lucky7.preproject.answer.dto.responseDto.AnswerResponseDto;
import com.lucky7.preproject.answer.entity.Answer;
import com.lucky7.preproject.comment.entity.AnswerComment;
import org.mapstruct.Mapper;

import java.util.List;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    @Mapping(source = "user.name", target = "user")
    @Mapping(source = "user.avatarImg", target = "avatarImg")
    AnswerResponseDto answerToAnswerDto(Answer answer);
    Answer answerDtoToAnswer(AnswerDto answerDto);
    //List<AnswerResponseDto> answersToAnswerDtos(List<Answer> answers);
    @Mapping(source = "content", target = "commentContent")
    @Mapping(source = "user.name", target = "commentUser")
    @Mapping(source = "id", target = "answerCommentId")

    AnswerCommentDto answerCommentToAnswerCommentDto(AnswerComment answerComment);
}
