package com.lucky7.preproject.comment.service;

import com.lucky7.preproject.comment.entity.AnswerComment;
import com.lucky7.preproject.comment.repository.AnswerCommentRepository;
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

    public AnswerComment updateAnswerComment(AnswerComment answerComment) {
        AnswerComment foundAnswerComment = answerCommentRepository.findById(answerComment.getAnswerCommentId()).get();
        foundAnswerComment.setAnswerCommentContent(answerComment.getAnswerCommentContent());
        return answerCommentRepository.save(foundAnswerComment);
    }

    public void deleteAnswerComment(long answerCommentId) {
        answerCommentRepository.deleteById(answerCommentId);
    }
}
