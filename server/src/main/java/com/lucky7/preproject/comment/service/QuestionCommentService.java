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
<<<<<<< HEAD
        QuestionComment foundQuestionComment = questionCommentRepository.findById(questionComment.getQuestionCommentId()).orElse(null);
=======
        QuestionComment foundQuestionComment = questionCommentRepository.findById(questionComment.getId()).orElse(null);
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
        if (foundQuestionComment == null) {
            return null;
        }

        if (!foundQuestionComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this comment.");
        }

<<<<<<< HEAD
        foundQuestionComment.setQuestionCommentContent(questionComment.getQuestionCommentContent());
=======
        foundQuestionComment.setContent(questionComment.getContent());
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
        return questionCommentRepository.save(foundQuestionComment);
    }

    public QuestionComment deleteQuestionComment(long questionCommentId, User user) {
        QuestionComment existingQuestionComment = questionCommentRepository.findById(questionCommentId).orElse(null);

        if (!existingQuestionComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to delete this comment.");
        }
<<<<<<< HEAD
        if(existingQuestionComment==null || existingQuestionComment.getQuestion().getQuestionId() != questionCommentId) {
=======
        if(existingQuestionComment==null || existingQuestionComment.getQuestion().getId() != questionCommentId) {
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
            return null;
        }
        questionCommentRepository.delete(existingQuestionComment);

        return existingQuestionComment;
    }

    public List<QuestionComment> findQuestionComments(long questionId) {
        return questionCommentRepository.findAllByQuestionId(questionId);
    }
}
