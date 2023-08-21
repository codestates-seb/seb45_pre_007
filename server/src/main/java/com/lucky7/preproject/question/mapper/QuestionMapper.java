package com.lucky7.preproject.question.mapper;

import com.lucky7.preproject.comment.dto.CommentResponseDto;
import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.question.dto.QuestionRequestDto;
import com.lucky7.preproject.question.dto.responseDto.NoCommentQuestionResponseDto;
import com.lucky7.preproject.question.dto.responseDto.QuestionResponseDto;
import com.lucky7.preproject.question.entity.Question;
import org.mapstruct.Mapper;

import org.mapstruct.Mapping;


@Mapper(componentModel = "spring") // Spring 의 Bean 으로 등록
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionRequestDto questionRequestDto);
    Question questionPatchDtoToQuestion(QuestionRequestDto questionRequestDto);
    @Mapping(source = "user.name", target = "user")
    @Mapping(source = "user.avatarImg", target = "avatarImg")
    QuestionResponseDto questionToSingleQuestionResponseDto(Question question);
    @Mapping(source = "user.name", target = "user")
    @Mapping(source = "user.avatarImg", target = "avatarImg")
    NoCommentQuestionResponseDto questionToAllQuestionResponseDto(Question question);

    @Mapping(source = "user.name", target = "user")
    CommentResponseDto questionCommentToCommentResponseDto(QuestionComment questionComment);
}
