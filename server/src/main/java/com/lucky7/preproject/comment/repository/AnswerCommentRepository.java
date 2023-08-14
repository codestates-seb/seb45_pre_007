package com.lucky7.preproject.comment.repository;

import com.lucky7.preproject.comment.entity.AnswerComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment,Long> {
}
