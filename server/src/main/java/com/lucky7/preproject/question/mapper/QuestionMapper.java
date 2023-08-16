package com.lucky7.preproject.question.mapper;

import com.lucky7.preproject.question.dto.requestDto.QuestionDto;
import com.lucky7.preproject.question.dto.responseDto.AllQuestionsResponseDto;
import com.lucky7.preproject.question.dto.responseDto.SingleQuestionResponseDto;
import com.lucky7.preproject.question.entity.Question;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring") // Spring 의 Bean 으로 등록
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto questionDto);
    Question questionPatchDtoToQuestion(QuestionDto questionDto);
    SingleQuestionResponseDto questionToSingleQuestionResponseDto(Question question);
    AllQuestionsResponseDto questionToAllQuestionResponseDto(Question question);
}
