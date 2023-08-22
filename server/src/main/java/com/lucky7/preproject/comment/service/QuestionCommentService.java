package com.lucky7.preproject.comment.service;

import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.repository.QuestionCommentRepository;
import java.util.List;

import com.lucky7.preproject.user.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class QuestionCommentService {
    private final QuestionCommentRepository questionCommentRepository;

    public QuestionComment createQuestionComment(QuestionComment questionComment) {
        return questionCommentRepository.save(questionComment);
    }

    public QuestionComment updateQuestionComment(QuestionComment questionComment, User user) {
        QuestionComment foundQuestionComment = questionCommentRepository.findById(questionComment.getId()).orElse(null);
        validateAuthor(foundQuestionComment, user);

        if (foundQuestionComment == null) {
            return null;
        }

        foundQuestionComment.setContent(questionComment.getContent());
        return questionCommentRepository.save(foundQuestionComment);
    }

    public QuestionComment deleteQuestionComment(long questionId, long questionCommentId, User user) {
        QuestionComment existingQuestionComment = questionCommentRepository.findById(questionCommentId).orElse(null);
        validateAuthor(existingQuestionComment, user);

        if(existingQuestionComment==null || existingQuestionComment.getQuestion().getId() != questionId) {
            return null;
        }
        questionCommentRepository.delete(existingQuestionComment);

        return existingQuestionComment;
    }

    public List<QuestionComment> findAllQuestionComments(long questionId) {
        return questionCommentRepository.findAllByQuestionId(questionId);
    }

    private void validateAuthor(QuestionComment questionComment, User user) {
        if (!questionComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this question.");
        }
    }
}
