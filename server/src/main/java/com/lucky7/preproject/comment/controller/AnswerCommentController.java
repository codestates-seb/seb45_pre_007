package com.lucky7.preproject.comment.controller;

import com.lucky7.preproject.answer.service.AnswerService;
import com.lucky7.preproject.comment.dto.AnswerCommentResponseDto;
import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.mapper.CommentMapper;
import com.lucky7.preproject.comment.service.AnswerCommentService;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.service.UserService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
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
@RequestMapping("/questions/{questionId}/answers/{answerId}/comments")
@Slf4j
public class AnswerCommentController {
    private final AnswerCommentService answerCommentService;
    private final AnswerService answerService;
    private final CommentMapper commentMapper;
    private final UserService userService;

    public AnswerCommentController(AnswerCommentService answerCommentService, AnswerService answerService,
                                   CommentMapper commentMapper, UserService userService) {
        this.answerCommentService = answerCommentService;
        this.answerService = answerService;
        this.commentMapper = commentMapper;
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> postAnswerComment(@PathVariable long questionId,
                                               @PathVariable long answerId,
                                               @RequestBody CommentRequestDto commentRequestDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        AnswerComment answerComment = commentMapper.commentRequestDtoToAnswerComment(commentRequestDto);
        answerComment.setAnswer(answerService.getAnswer(answerId));
        answerComment.setUser(user); // 값을 할당하기위해 추가
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
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        AnswerComment answerComment = commentMapper.commentRequestDtoToAnswerComment(commentRequestDto);
        answerComment.setAnswerCommentId(answerId);

        try {
            // CommentService를 사용해서 업데이트된 Comment Entity를 new Entity에 저장
            AnswerComment updatedAnswerComment = answerCommentService.updateAnswerComment(answerComment, user);
            AnswerCommentResponseDto responseDto = commentMapper.answerCommentToAnswerCommentResponseDto(updatedAnswerComment);

            return new ResponseEntity<>(responseDto, HttpStatus.OK);
        } catch (AccessDeniedException e) {
            log.error("댓글을 작성한 User가 아닙니다");
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteAnswerComment(@PathVariable long questionId,
                                                 @PathVariable long answerId,
                                                 @PathVariable long commentId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        try {
            answerCommentService.deleteAnswerComment(commentId, user);

            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (AccessDeniedException e) {
            log.error("댓글을 작성한 User가 아닙니다");

            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}
