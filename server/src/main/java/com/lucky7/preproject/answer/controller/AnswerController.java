package com.lucky7.preproject.answer.controller;

import com.lucky7.preproject.answer.dto.requestDto.AnswerDto;
import com.lucky7.preproject.answer.dto.responseDto.AnswerCommentDto;
import com.lucky7.preproject.answer.dto.responseDto.AnswerResponseDto;
import com.lucky7.preproject.answer.entity.Answer;
import com.lucky7.preproject.answer.mapper.AnswerMapper;
import com.lucky7.preproject.answer.service.AnswerService;
import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.service.AnswerCommentService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@AllArgsConstructor
@RestController
@RequestMapping("/questions/{questionId}/answers")
@CrossOrigin
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final AnswerCommentService answerCommentService;

    @PostMapping
    public ResponseEntity<AnswerResponseDto> postAnswer(@PathVariable long questionId,
                                                        @RequestBody AnswerDto requestDto) {
        Answer answerToCreate = answerMapper.answerDtoToAnswer(requestDto);
        Answer createdAnswer = answerService.createAnswer(questionId, answerToCreate);
        AnswerResponseDto responseDto = answerMapper.answerToAnswerDto(createdAnswer);

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<AnswerResponseDto>> getAllAnswers(@PathVariable long questionId) {
        List<Answer> foundAnswers = answerService.getAllAnswers(questionId);
        List<AnswerResponseDto> responseDtos = answerMapper.answersToAnswerDtos(foundAnswers);

        for(AnswerResponseDto answerResponseDto : responseDtos) {
            List<AnswerComment> answerComments = answerCommentService.findAnswerComments(answerResponseDto.getAnswerId());
            List<AnswerCommentDto> answerCommentDtos = answerMapper.answerCommentsToAnswerCommentDtos(answerComments);
            answerResponseDto.setAnswerComments(answerCommentDtos);
        }

        return new ResponseEntity<>(responseDtos, HttpStatus.OK);
    }

    @PatchMapping("/{answerId}")
    public ResponseEntity<AnswerResponseDto> patchAnswer(@PathVariable long questionId,
                                                         @PathVariable long answerId,
                                                         @RequestBody AnswerDto requestDto) {
        Answer answerToUpdate = answerMapper.answerDtoToAnswer(requestDto);
        Answer updatedAnswer = answerService.updateAnswer(questionId, answerId, answerToUpdate);
        AnswerResponseDto responseDto = answerMapper.answerToAnswerDto(updatedAnswer);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
    @DeleteMapping("/{answerId}")
    public ResponseEntity<Map<String, Object>> deleteAnswer(@PathVariable long questionId,
                                                            @PathVariable long answerId) {
        answerService.deleteAnswer(questionId, answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
