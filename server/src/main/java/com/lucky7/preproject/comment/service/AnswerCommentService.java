package com.lucky7.preproject.comment.service;

import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.repository.AnswerCommentRepository;
import java.util.List;

import com.lucky7.preproject.user.entity.User;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

@Service
public class AnswerCommentService {
    private final AnswerCommentRepository answerCommentRepository;

    public AnswerCommentService(AnswerCommentRepository answerCommentRepository) {
        this.answerCommentRepository = answerCommentRepository;
    }

    public AnswerComment createAnswerComment(AnswerComment answerComment) {
        return answerCommentRepository.save(answerComment);
    }

    public AnswerComment updateAnswerComment(AnswerComment answerComment, User user) {
        AnswerComment foundAnswerComment = answerCommentRepository.findById(answerComment.getId()).orElse(null);
        if (foundAnswerComment == null) {
            return null;
        }

        if (!foundAnswerComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this comment.");
        }
        foundAnswerComment.setContent(answerComment.getContent());
        return answerCommentRepository.save(foundAnswerComment);
    }

    public AnswerComment deleteAnswerComment(long answerCommentId, User user) {
        AnswerComment existingAnswerComment = answerCommentRepository.findById(answerCommentId).orElse(null);


        if (!existingAnswerComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to delete this comment.");
        }

        if (existingAnswerComment == null || existingAnswerComment.getAnswer().getId() != answerCommentId) {
            return null;
        }

        answerCommentRepository.delete(existingAnswerComment);
        return existingAnswerComment;
    }

    public List<AnswerComment> findAnswerComments(long answerId) {
        return answerCommentRepository.findAllByAnswerId(answerId);
    }
}
