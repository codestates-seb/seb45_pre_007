package com.lucky7.preproject.question.controller;

import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.service.QuestionCommentService;
import com.lucky7.preproject.question.dto.requestDto.QuestionDto;
import com.lucky7.preproject.question.dto.responseDto.AllQuestionsResponseDto;
import com.lucky7.preproject.question.dto.responseDto.QuestionCommentDto;
import com.lucky7.preproject.question.dto.responseDto.SingleQuestionResponseDto;
import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.service.QuestionCommentService;
import com.lucky7.preproject.question.dto.responseDto.QuestionCommentDto;
import com.lucky7.preproject.question.entity.Question;
import com.lucky7.preproject.question.mapper.QuestionMapper;
import com.lucky7.preproject.question.service.QuestionService;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@RestController
@RequestMapping("/questions")
@Slf4j
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;
    private final UserService userService;
    private final QuestionCommentService questionCommentService;

    @PostMapping
    public ResponseEntity<SingleQuestionResponseDto> postQuestion(@RequestBody QuestionDto questionDto) {
        // 현재 인증된 사용자 정보 가져오기
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User currentUser = userService.findUserByEmail(auth.getPrincipal().toString());

        // DTO에서 Entity로 변환
        Question questionToCreate = mapper.questionPostDtoToQuestion(questionDto);

        // 사용자 정보 설정
        questionToCreate.setUser(currentUser);

        // 서비스에서 엔티티 생성 및 저장
        Question createdQuestion = questionService.createQuestion(questionToCreate);
        SingleQuestionResponseDto responseDto = mapper.questionToSingleQuestionResponseDto(createdQuestion);
        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<AllQuestionsResponseDto>> getQuestions() {
        List<Question> foundQuestions = questionService.getAllQuestions();

        List<AllQuestionsResponseDto> responseDtos = foundQuestions.stream()
                .map(mapper::questionToAllQuestionResponseDto)
                .collect(Collectors.toList());

        return new ResponseEntity<>(responseDtos, HttpStatus.OK);
    }
    @GetMapping("/{questionId}")
    public ResponseEntity<SingleQuestionResponseDto> getQuestion(@PathVariable long questionId) {

        Question foundQuestion = questionService.getQuestion(questionId);
        SingleQuestionResponseDto responseDto = mapper.questionToSingleQuestionResponseDto(foundQuestion);

        List<QuestionComment> questionComments = questionCommentService.findQuestionComments(questionId);
        List<QuestionCommentDto> questionCommentDtos = mapper.questionCommentsDtos(questionComments);
        responseDto.setQuestionComments(questionCommentDtos);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
    @PatchMapping("/{questionId}")
    public ResponseEntity<SingleQuestionResponseDto> patchQuestion(@PathVariable long questionId,
                                @RequestBody QuestionDto questionDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        // 업데이트할 데이터를 DTO 에서 new Entity 로 변환
       Question questionToUpdate = mapper.questionPatchDtoToQuestion(questionDto);

       try {
            // QuestionService 를 사용해서 업데이트된 Entity 를 new Entity 에 저장
            Question updatedQuestion = questionService.updateQuestion(questionId, questionToUpdate, user);

            // 업데이트된 Entity 를 다시 DTO 로 변환
            SingleQuestionResponseDto responseDto = mapper.questionToSingleQuestionResponseDto(updatedQuestion);

            return new ResponseEntity<>(responseDto, HttpStatus.OK);
        } catch (AccessDeniedException e) {
            log.error("게시물을 작성한 User가 아닙니다");
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
    @DeleteMapping("/{questionId}")
    public ResponseEntity<Void> deleteQuestion(@PathVariable long questionId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        try {
            questionService.deleteQuestion(questionId, user);

            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (AccessDeniedException e) {
            log.error("게시물을 작성한 User가 아닙니다");

            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}