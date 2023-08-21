package com.lucky7.preproject.answer.repository;


import com.lucky7.preproject.answer.entity.Answer;
import com.lucky7.preproject.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    List<Answer> findAllByQuestion(Question question);
}
