package com.lucky7.preproject.answer.mapper;

import com.lucky7.preproject.answer.dto.requestDto.AnswerDto;
import com.lucky7.preproject.answer.dto.responseDto.AnswerResponseDto;
import com.lucky7.preproject.answer.entity.Answer;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {
    AnswerResponseDto answerToAnswerDto(Answer answer);
    Answer answerDtoToAnswer(AnswerDto answerDto);
    List<AnswerResponseDto> answersToAnswerDtos(List<Answer> answers);
}
