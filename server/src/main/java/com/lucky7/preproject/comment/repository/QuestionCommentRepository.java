package com.lucky7.preproject.comment.repository;

import com.lucky7.preproject.comment.entity.QuestionComment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionCommentRepository extends JpaRepository<QuestionComment,Long> {
    List<QuestionComment> findAllByQuestionQuestionId(long questionId);
}
