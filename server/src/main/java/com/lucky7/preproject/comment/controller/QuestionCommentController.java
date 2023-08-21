package com.lucky7.preproject.comment.controller;

import com.lucky7.preproject.comment.dto.CommentRequestDto;
import com.lucky7.preproject.comment.dto.QuestionCommentResponseDto;
import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.mapper.CommentMapper;
import com.lucky7.preproject.comment.service.QuestionCommentService;
import com.lucky7.preproject.question.service.QuestionService;
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
@RequestMapping("/questions/{questionId}/comments")
@Slf4j
public class QuestionCommentController {
    private final QuestionCommentService questionCommentService;
    private final QuestionService questionService;
    private final CommentMapper commentMapper;
    private final UserService userService;

    public QuestionCommentController(QuestionCommentService questionCommentService,
                                     QuestionService questionService,
                                     CommentMapper commentMapper, UserService userService) {
        this.questionCommentService = questionCommentService;
        this.questionService = questionService;
        this.commentMapper = commentMapper;
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<?> postQuestionComment(@PathVariable long questionId,
                                                 @RequestBody CommentRequestDto commentRequestDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        QuestionComment questionComment = commentMapper.commentRequestDtoToQuestionComment(commentRequestDto);
        questionComment.setQuestion(questionService.findQuestion(questionId));
        //questionComment.setUser(new User());
        questionComment.setUser(user); // 값을 할당하기위해 추가

        QuestionComment createdQuestionComment = questionCommentService.createQuestionComment(questionComment);
        QuestionCommentResponseDto responseDto = commentMapper.questionCommentToQuestionCommentResponseDto(createdQuestionComment);
        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @PatchMapping("/{commentId}")
    public ResponseEntity<?> patchQuestionComment(@PathVariable long questionId,
                                                  @PathVariable long commentId,
                                                  @RequestBody CommentRequestDto commentRequestDto) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        QuestionComment questionComment = commentMapper.commentRequestDtoToQuestionComment(commentRequestDto);
        questionComment.setId(commentId);

        try {
            // CommentService를 사용해서 업데이트된 Comment Entity를 new Entity에 저장
            QuestionComment updatedQuestionComment = questionCommentService.updateQuestionComment(questionComment, user);
            QuestionCommentResponseDto responseDto = commentMapper.questionCommentToQuestionCommentResponseDto(updatedQuestionComment);

            return new ResponseEntity<>(responseDto, HttpStatus.OK);
        } catch (AccessDeniedException e) {
            log.error("댓글을 작성한 User가 아닙니다");
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteQuestionComment(@PathVariable long questionId,
                                                   @PathVariable long commentId) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        User user = userService.findUserByEmail(auth.getPrincipal().toString());

        try {
            questionCommentService.deleteQuestionComment(commentId, user);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }catch (AccessDeniedException e) {
            log.error("댓글을 작성한 User가 아닙니다");

            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}


