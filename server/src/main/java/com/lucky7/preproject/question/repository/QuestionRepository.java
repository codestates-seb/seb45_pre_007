package com.lucky7.preproject.question.repository;

import com.lucky7.preproject.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionRepository extends JpaRepository<Question,Long> {
}
