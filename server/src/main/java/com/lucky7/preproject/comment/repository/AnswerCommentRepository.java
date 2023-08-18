package com.lucky7.preproject.comment.repository;

import com.lucky7.preproject.comment.entity.AnswerComment;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment,Long> {
    List<AnswerComment> findAllByAnswerAnswerId(long answerId);
    // answer.id
}
