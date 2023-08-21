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
    @Mapping(source = "user.userName", target = "answerUser")
    AnswerResponseDto answerToAnswerDto(Answer answer);
    Answer answerDtoToAnswer(AnswerDto answerDto);
    //@Mapping(source = "user.userName", target = "answerUser")
    //List<AnswerResponseDto> answersToAnswerDtos(List<Answer> answers);
    @Mapping(source = "answerCommentContent", target = "commentContent")
    @Mapping(source = "user.userName", target = "commentUser")
    AnswerCommentDto answerCommentToAnswerCommentDto(AnswerComment answerComment);
}
