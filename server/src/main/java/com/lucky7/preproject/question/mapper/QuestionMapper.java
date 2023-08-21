package com.lucky7.preproject.question.mapper;

import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.question.dto.requestDto.QuestionDto;
import com.lucky7.preproject.question.dto.responseDto.AllQuestionsResponseDto;
import com.lucky7.preproject.question.dto.responseDto.QuestionCommentDto;
import com.lucky7.preproject.question.dto.responseDto.SingleQuestionResponseDto;
import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.question.dto.responseDto.QuestionCommentDto;
import com.lucky7.preproject.question.entity.Question;
import org.mapstruct.Mapper;

import java.util.List;
<<<<<<< HEAD
=======
import org.mapstruct.Mapping;
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4

@Mapper(componentModel = "spring") // Spring 의 Bean 으로 등록
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto questionDto);
    Question questionPatchDtoToQuestion(QuestionDto questionDto);
    @Mapping(source = "user.name", target = "user")
    SingleQuestionResponseDto questionToSingleQuestionResponseDto(Question question);
    @Mapping(source = "user.name", target = "user")
    AllQuestionsResponseDto questionToAllQuestionResponseDto(Question question);
    List<QuestionCommentDto> questionCommentsDtos(List<QuestionComment> questionComments);
}
