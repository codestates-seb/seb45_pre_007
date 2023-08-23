package com.lucky7.preproject.comment.controller;

import com.lucky7.preproject.answer.service.AnswerService;
import com.lucky7.preproject.comment.dto.CommentResponseDto;
import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.mapper.CommentMapper;
import com.lucky7.preproject.comment.service.AnswerCommentService;
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
@RequestMapping("/questions/{questionId}/answers/{answerId}/comments")
@Slf4j
public class AnswerCommentController {
    private final AnswerCommentService answerCommentService;
    private final AnswerService answerService;
    private final CommentMapper commentMapper;
    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> postAnswerComment(@PathVariable long questionId,
                                               @PathVariable long answerId,
                                               @RequestBody CommentRequestDto commentRequestDto) {
        User user = getCurrentUser();
        AnswerComment answerComment = commentMapper.commentRequestDtoToAnswerComment(commentRequestDto);
        answerComment.setAnswer(answerService.findAnswer(answerId));
        answerComment.setUser(user);

        AnswerComment createdAnswerComment = answerCommentService.createAnswerComment(answerComment);
        CommentResponseDto responseDto = commentMapper.answerCommentToCommentResponseDto(createdAnswerComment);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<?> patchAnswerComment(@PathVariable long questionId,
                                                @PathVariable long answerId,
                                                @PathVariable long commentId,
                                                @RequestBody CommentRequestDto commentRequestDto) {
        User user = getCurrentUser();
        AnswerComment answerComment = commentMapper.commentRequestDtoToAnswerComment(commentRequestDto);
        answerComment.setId(commentId);

        //CommentService를 사용해서 업데이트된 Comment Entity를 new Entity에 저장
        AnswerComment updatedAnswerComment = answerCommentService.updateAnswerComment(answerComment, user);
        CommentResponseDto responseDto = commentMapper.answerCommentToCommentResponseDto(updatedAnswerComment);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteAnswerComment(@PathVariable long questionId,
                                                 @PathVariable long answerId,
                                                 @PathVariable long commentId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findByEmail(auth.getPrincipal().toString());
        answerCommentService.deleteAnswerComment(answerId, commentId, user);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    private User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();

        return userService.findByEmail(auth.getPrincipal().toString());
    }
}
