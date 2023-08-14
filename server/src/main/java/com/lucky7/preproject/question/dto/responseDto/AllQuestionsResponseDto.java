package com.lucky7.preproject.question.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AllQuestionsResponseDto {
    private long questionId;
    private String questionTitle;
    private String questionContent;
    private String questionUser;
    private String createAt;
    private String lastModifiedAt;
}
