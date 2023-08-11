package com.lucky7.preproject.question.dto.requestDto;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@Setter
public class QuestionDto { // 질문 Post & Patch Dto 동일하므로 따로 만들지 않는다
//    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // 데이터베이스에 id 자동 증가
//    private int questionId;
    private String questionTitle;
    private String questionContent;
}
