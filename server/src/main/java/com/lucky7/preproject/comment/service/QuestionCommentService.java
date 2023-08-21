package com.lucky7.preproject.comment.service;

import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.repository.QuestionCommentRepository;
import java.util.List;

import com.lucky7.preproject.user.entity.User;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.stereotype.Service;

@Service
public class QuestionCommentService {
    private final QuestionCommentRepository questionCommentRepository;

    public QuestionCommentService(QuestionCommentRepository questionCommentRepository) {
        this.questionCommentRepository = questionCommentRepository;
    }

    public QuestionComment createQuestionComment(QuestionComment questionComment) {
        return questionCommentRepository.save(questionComment);
    }

    public QuestionComment updateQuestionComment(QuestionComment questionComment, User user) {

        QuestionComment foundQuestionComment = questionCommentRepository.findById(questionComment.getId()).orElse(null);

        if (foundQuestionComment == null) {
            return null;
        }

        if (!foundQuestionComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this comment.");
        }


        foundQuestionComment.setContent(questionComment.getContent());
        return questionCommentRepository.save(foundQuestionComment);
    }

    public QuestionComment deleteQuestionComment(long questionCommentId, User user) {
        QuestionComment existingQuestionComment = questionCommentRepository.findById(questionCommentId).orElse(null);

        if (!existingQuestionComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to delete this comment.");
        }

        if(existingQuestionComment==null || existingQuestionComment.getQuestion().getId() != questionCommentId) {

            return null;
        }
        questionCommentRepository.delete(existingQuestionComment);

        return existingQuestionComment;
    }

    public List<QuestionComment> findAllQuestionComments(long questionId) {
        return questionCommentRepository.findAllByQuestionId(questionId);
    }
}
