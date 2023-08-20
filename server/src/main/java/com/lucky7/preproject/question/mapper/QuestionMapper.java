package com.lucky7.preproject.question.mapper;

import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.question.dto.requestDto.QuestionDto;
import com.lucky7.preproject.question.dto.responseDto.AllQuestionsResponseDto;
import com.lucky7.preproject.question.dto.responseDto.QuestionCommentDto;
import com.lucky7.preproject.question.dto.responseDto.SingleQuestionResponseDto;
import com.lucky7.preproject.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {}) // Spring 의 Bean 으로 등록
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto questionDto);
    Question questionPatchDtoToQuestion(QuestionDto questionDto);
    @Mapping(source = "user.userName", target = "questionUser")
    SingleQuestionResponseDto questionToSingleQuestionResponseDto(Question question);
    @Mapping(source = "user.userName", target = "questionUser")
    AllQuestionsResponseDto questionToAllQuestionResponseDto(Question question);
    @Mapping(source = "questionCommentContent", target = "commentContent")
    @Mapping(source = "user.userName", target = "commentUser")
    QuestionCommentDto questionCommentToQuestionCommentsDto(QuestionComment questionComment);
}
