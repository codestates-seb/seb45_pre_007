package com.lucky7.preproject.answer.controller;

import com.lucky7.preproject.answer.dto.AnswerRequestDto;
import com.lucky7.preproject.answer.dto.AnswerResponseDto;
import com.lucky7.preproject.answer.entity.Answer;
import com.lucky7.preproject.answer.mapper.AnswerMapper;
import com.lucky7.preproject.answer.service.AnswerService;
import com.lucky7.preproject.comment.dto.CommentResponseDto;
import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.service.AnswerCommentService;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
@RequestMapping("/questions/{questionId}/answers")
@Slf4j
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final AnswerCommentService answerCommentService;
    private final UserService userService;

    @PostMapping
    public ResponseEntity<AnswerResponseDto> postAnswer(@PathVariable long questionId,
                                                        @RequestBody AnswerRequestDto requestDto) {
        User user = getCurrentUser();
        Answer answerToCreate = answerMapper.answerDtoToAnswer(requestDto);
        answerToCreate.setUser(user); // 값을 할당하기위해 추가

        Answer createdAnswer = answerService.createAnswer(questionId, answerToCreate);
        AnswerResponseDto responseDto = answerMapper.answerToAnswerDto(createdAnswer);

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AnswerResponseDto>> getAllAnswers(@PathVariable long questionId) {
        List<Answer> foundAnswers = answerService.findAllAnswers(questionId);
        List<AnswerResponseDto> responseDtos = foundAnswers
                .stream()
                .map(answerMapper::answerToAnswerDto)
                .collect(Collectors.toList());

        for(AnswerResponseDto answerResponseDto : responseDtos) {
            List<AnswerComment> answerComments = answerCommentService.findAllAnswerComments(answerResponseDto.getId());
            List<CommentResponseDto> commentResponseDtos = answerComments
                    .stream()
                    .map(answerMapper::answerCommentToCommentResponseDto)
                    .collect(Collectors.toList());
            answerResponseDto.setAnswerComments(commentResponseDtos);
        }

        return new ResponseEntity<>(responseDtos, HttpStatus.OK);
    }

    @PatchMapping("/{answerId}")
    public ResponseEntity<AnswerResponseDto> patchAnswer(@PathVariable long questionId,
                                                         @PathVariable long answerId,
                                                         @RequestBody AnswerRequestDto requestDto) {
        User user = getCurrentUser();
        Answer answerToUpdate = answerMapper.answerDtoToAnswer(requestDto);

        // AnswerService를 사용해서 업데이트된 Entity를 new Entity에 저장
        Answer updatedAnswer = answerService.updateAnswer(questionId, answerId, answerToUpdate, user);

        // 업데이트된 Entity를 다시 DTO로 변환
        AnswerResponseDto responseDto = answerMapper.answerToAnswerDto(updatedAnswer);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
    @DeleteMapping("/{answerId}")
    public ResponseEntity<Map<String, Object>> deleteAnswer(@PathVariable long questionId,
                                                            @PathVariable long answerId) {
        User user = getCurrentUser();
        answerService.deleteAnswer(questionId, answerId, user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        return userService.findByEmail(auth.getPrincipal().toString());
    }
}
