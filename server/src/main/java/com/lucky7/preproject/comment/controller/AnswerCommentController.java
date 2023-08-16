package com.lucky7.preproject.comment.controller;

import com.lucky7.preproject.comment.dto.AnswerCommentResponseDto;
import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.mapper.CommentMapper;
import com.lucky7.preproject.comment.service.AnswerCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questions/{questionId}/answers/{answerId}/comments")
@CrossOrigin
public class AnswerCommentController {
    private final AnswerCommentService answerCommentService;
    private final CommentMapper commentMapper;

    public AnswerCommentController(AnswerCommentService answerCommentService, CommentMapper commentMapper) {
        this.answerCommentService = answerCommentService;
        this.commentMapper = commentMapper;
    }

    @PostMapping
    public ResponseEntity<?> postAnswerComment(@PathVariable long questionId,
                                               @PathVariable long answerId,
                                               @RequestBody CommentRequestDto commentRequestDto) {
        AnswerComment answerComment = commentMapper.commentRequestDtoToAnswerComment(commentRequestDto);
        //answerComment.setAnswer()
        //answerComment.setUser()
        AnswerComment createdAnswerComment = answerCommentService.createAnswerComment(answerComment);
        AnswerCommentResponseDto responseDto = commentMapper.answerCommentToAnswerCommentResponseDto(createdAnswerComment);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<?> patchAnswerComment(@PathVariable long questionId,
                                                @PathVariable long answerId,
                                                @PathVariable long commentId,
                                                @RequestBody CommentRequestDto commentRequestDto) {
        AnswerComment answerComment = commentMapper.commentRequestDtoToAnswerComment(commentRequestDto);
        answerComment.setAnswerCommentId(commentId);

        AnswerComment updatedAnswerComment = answerCommentService.updateAnswerComment(answerComment);
        AnswerCommentResponseDto responseDto = commentMapper.answerCommentToAnswerCommentResponseDto(updatedAnswerComment);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteAnswerComment(@PathVariable long questionId,
                                                 @PathVariable long answerId,
                                                 @PathVariable long commentId) {
        answerCommentService.deleteAnswerComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
