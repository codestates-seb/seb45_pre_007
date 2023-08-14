package com.lucky7.preproject.answer.repository;


import com.lucky7.preproject.answer.entity.Answer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
