package com.lucky7.preproject.comment.controller;

import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.dto.QuestionCommentResponseDto;
import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.mapper.CommentMapper;
import com.lucky7.preproject.comment.service.QuestionCommentService;
import com.lucky7.preproject.question.service.QuestionService;
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
@RequestMapping("/questions/{questionId}/comments")
@CrossOrigin
public class QuestionCommentController {
    private final QuestionCommentService questionCommentService;
    private final QuestionService questionService;
    private final CommentMapper commentMapper;

    public QuestionCommentController(QuestionCommentService questionCommentService,
                                     QuestionService questionService,
                                     CommentMapper commentMapper) {
        this.questionCommentService = questionCommentService;
        this.questionService = questionService;
        this.commentMapper = commentMapper;
    }

    @PostMapping
    public ResponseEntity<?> postQuestionComment(@PathVariable long questionId,
                                                 @RequestBody CommentRequestDto commentRequestDto) {
        QuestionComment questionComment = commentMapper.commentRequestDtoToQuestionComment(commentRequestDto);
        questionComment.setQuestion(questionService.getQuestion(questionId));
        //questionComment.setUser(new User());
        QuestionComment createdQuestionComment = questionCommentService.createQuestionComment(questionComment);
        QuestionCommentResponseDto responseDto = commentMapper.questionCommentToQuestionCommentResponseDto(createdQuestionComment);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<?> patchQuestionComment(@PathVariable long questionId,
                                                  @PathVariable long commentId,
                                                  @RequestBody CommentRequestDto commentRequestDto) {
        QuestionComment questionComment = commentMapper.commentRequestDtoToQuestionComment(commentRequestDto);
        questionComment.setQuestionCommentId(commentId);

        QuestionComment updatedQuestionComment = questionCommentService.updateQuestionComment(questionComment);
        QuestionCommentResponseDto responseDto = commentMapper.questionCommentToQuestionCommentResponseDto(updatedQuestionComment);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteQuestionComment(@PathVariable long questionId,
                                                   @PathVariable long commentId) {
        questionCommentService.deleteQuestionComment(commentId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}


