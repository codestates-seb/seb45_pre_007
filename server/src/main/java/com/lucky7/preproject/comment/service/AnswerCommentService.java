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
<<<<<<< HEAD
        AnswerComment foundAnswerComment = answerCommentRepository.findById(answerComment.getAnswerCommentId()).orElse(null);
=======
        AnswerComment foundAnswerComment = answerCommentRepository.findById(answerComment.getId()).orElse(null);
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
        if (foundAnswerComment == null) {
            return null;
        }

        if (!foundAnswerComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this comment.");
        }
<<<<<<< HEAD
        foundAnswerComment.setAnswerCommentContent(answerComment.getAnswerCommentContent());
=======
        foundAnswerComment.setContent(answerComment.getContent());
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
        return answerCommentRepository.save(foundAnswerComment);
    }

    public AnswerComment deleteAnswerComment(long answerCommentId, User user) {
        AnswerComment existingAnswerComment = answerCommentRepository.findById(answerCommentId).orElse(null);


        if (!existingAnswerComment.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to delete this comment.");
        }

<<<<<<< HEAD
        if (existingAnswerComment == null || existingAnswerComment.getAnswer().getAnswerId() != answerCommentId) {
=======
        if (existingAnswerComment == null || existingAnswerComment.getAnswer().getId() != answerCommentId) {
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
            return null;
        }

        answerCommentRepository.delete(existingAnswerComment);
        return existingAnswerComment;
    }

    public List<AnswerComment> findAllAnswerComments(long answerId) {
        return answerCommentRepository.findAllByAnswerId(answerId);
    }
}
