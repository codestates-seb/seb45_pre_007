package com.lucky7.preproject.comment.service;

import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.repository.AnswerCommentRepository;
import java.util.List;

import com.lucky7.preproject.user.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AnswerCommentService {
    private final AnswerCommentRepository answerCommentRepository;

    public AnswerComment createAnswerComment(AnswerComment answerComment) {
        return answerCommentRepository.save(answerComment);
    }

    public AnswerComment updateAnswerComment(AnswerComment answerComment, User user) {
        AnswerComment foundAnswerComment = answerCommentRepository.findById(answerComment.getId()).orElse(null);
        validateAuthor(foundAnswerComment, user);

        if (foundAnswerComment == null) {
            return null;
        }

        foundAnswerComment.setContent(answerComment.getContent());
        return answerCommentRepository.save(foundAnswerComment);
    }

    public AnswerComment deleteAnswerComment(long answerId, long answerCommentId, User user) {
        AnswerComment existingAnswerComment = answerCommentRepository.findById(answerCommentId).orElse(null);
        validateAuthor(existingAnswerComment, user);

        if (existingAnswerComment == null || existingAnswerComment.getAnswer().getId() != answerId) {
            return null;
        }

        answerCommentRepository.delete(existingAnswerComment);
        return existingAnswerComment;
    }

    public List<AnswerComment> findAllAnswerComments(long answerId) {
        return answerCommentRepository.findAllByAnswerId(answerId);
    }

    private void validateAuthor(AnswerComment answerComment, User user) {
        if (!answerComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this question.");
        }
    }
}
