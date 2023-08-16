package com.lucky7.preproject.comment.service;

import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.repository.QuestionCommentRepository;
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

    public QuestionComment updateQuestionComment(QuestionComment questionComment) {
        QuestionComment foundQuestionComment = questionCommentRepository.findById(questionComment.getQuestionCommentId()).get();
        foundQuestionComment.setQuestionCommentContent(questionComment.getQuestionCommentContent());
        return questionCommentRepository.save(foundQuestionComment);
    }

    public void deleteQuestionComment(long questionCommentId) {
        questionCommentRepository.deleteById(questionCommentId);
    }
}