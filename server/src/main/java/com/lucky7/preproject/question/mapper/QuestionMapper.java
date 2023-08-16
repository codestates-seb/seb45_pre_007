package com.lucky7.preproject.question.mapper;

import com.lucky7.preproject.question.dto.requestDto.QuestionPatchDto;
import com.lucky7.preproject.question.dto.requestDto.QuestionPostDto;
import com.lucky7.preproject.question.dto.responseDto.AllQuestionsResponseDto;
import com.lucky7.preproject.question.dto.responseDto.SingleQuestionResponseDto;
import com.lucky7.preproject.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring") // Spring 의 Bean 으로 등록
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionPostDto questionPostDto);
    Question questionPatchDtoToQuestion(QuestionPatchDto questionPatchDto);
    SingleQuestionResponseDto questionToSingleQuestionResponseDto(Question question);
    AllQuestionsResponseDto questionToAllQuestionResponseDto(Question question);
}
