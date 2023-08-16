package com.lucky7.preproject.question.controller;

import com.lucky7.preproject.question.dto.requestDto.QuestionPatchDto;
import com.lucky7.preproject.question.dto.requestDto.QuestionPostDto;
import com.lucky7.preproject.question.dto.responseDto.AllQuestionsResponseDto;
import com.lucky7.preproject.question.dto.responseDto.CommentDto;
import com.lucky7.preproject.question.dto.responseDto.SingleQuestionResponseDto;
import com.lucky7.preproject.question.entity.Question;
import com.lucky7.preproject.question.mapstruct.mapper.QuestionMapper;
import com.lucky7.preproject.question.service.QuestionService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("/questions")
@CrossOrigin
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping
    public ResponseEntity<SingleQuestionResponseDto> postQuestion(@RequestBody QuestionPostDto questionPostDto) {
        // DTO에서 Entity로 변환
        Question questionToCreate = mapper.questionPostDtoToQuestion(questionPostDto);
        // 서비스에서 엔티티를
        Question createdQuestion = questionService.createQuestion(questionToCreate);
        SingleQuestionResponseDto responseDto = mapper.questionToSingleQuestionResponseDto(createdQuestion);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<AllQuestionsResponseDto>> getQuestions() {
        List<Question> questions = questionService.getAllQuestions();

        List<AllQuestionsResponseDto> questionsDtoList = questions.stream()
                .map(mapper::questionToAllQuestionResponseDto)
                .collect(Collectors.toList());

        return new ResponseEntity<>(questionsDtoList, HttpStatus.OK);
    }
    @GetMapping("/{questionId}")
    public ResponseEntity<SingleQuestionResponseDto> getQuestion(@PathVariable long questionId) {

        Question foundQuestion = questionService.getQuestion(questionId);
        SingleQuestionResponseDto singleResponseDto = mapper.questionToSingleQuestionResponseDto(foundQuestion);

        return new ResponseEntity<>(singleResponseDto, HttpStatus.OK);
    }
    @PatchMapping("/{questionId}")
    public ResponseEntity<SingleQuestionResponseDto> patchQuestion(@PathVariable long questionId,
                                @RequestBody QuestionPatchDto questionPatchDto) {

        // 업데이트할 데이터를 DTO 에서 new Entity 로 변환
       Question questionDataToUpdate = mapper.questionPatchDtoToQuestion(questionPatchDto);
       // QuestionService 를 사용해서 업데이트된 Entity 를 new Entity 에 저장
        Question updatedQuestion = questionService.updateQuestion(questionId, questionDataToUpdate);
       // 업데이트된 Entity 를 다시 DTO 로 변환
       SingleQuestionResponseDto patchedDto = mapper.questionToSingleQuestionResponseDto(updatedQuestion);

        return new ResponseEntity<>(patchedDto, HttpStatus.OK);
    }
    @DeleteMapping("/{questionId}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}