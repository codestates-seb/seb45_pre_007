package com.lucky7.preproject.comment.controller;

import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.dto.CommentResponseDto;
import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.mapper.CommentMapper;
import com.lucky7.preproject.comment.service.QuestionCommentService;
import com.lucky7.preproject.question.service.QuestionService;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.service.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/questions/{questionId}/comments")
@Slf4j
public class QuestionCommentController {
    private final QuestionCommentService questionCommentService;
    private final QuestionService questionService;
    private final CommentMapper commentMapper;
    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> postQuestionComment(@PathVariable long questionId,
                                                 @RequestBody CommentRequestDto commentRequestDto) {
        User user = getCurrentUser();
        QuestionComment questionComment = commentMapper.commentRequestDtoToQuestionComment(commentRequestDto);
        questionComment.setQuestion(questionService.findQuestion(questionId));
        questionComment.setUser(user); // 값을 할당하기위해 추가

        QuestionComment createdQuestionComment = questionCommentService.createQuestionComment(questionComment);
        CommentResponseDto responseDto = commentMapper.questionCommentToCommentResponseDto(createdQuestionComment);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<?> patchQuestionComment(@PathVariable long questionId,
                                                  @PathVariable long commentId,
                                                  @RequestBody CommentRequestDto commentRequestDto) {
        User user = getCurrentUser();
        QuestionComment questionComment = commentMapper.commentRequestDtoToQuestionComment(commentRequestDto);
        questionComment.setId(commentId);

        // CommentService를 사용해서 업데이트된 Comment Entity를 new Entity에 저장
        QuestionComment updatedQuestionComment = questionCommentService.updateQuestionComment(questionComment, user);
        CommentResponseDto responseDto = commentMapper.questionCommentToCommentResponseDto(updatedQuestionComment);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteQuestionComment(@PathVariable long questionId,
                                                   @PathVariable long commentId) {
        User user = getCurrentUser();
        questionCommentService.deleteQuestionComment(questionId, commentId, user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        return userService.findByEmail(auth.getPrincipal().toString());
    }
}


