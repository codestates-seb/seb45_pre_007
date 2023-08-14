package com.lucky7.preproject.question.dto.responseDto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;
import org.springframework.lang.Nullable;

@Getter
@Setter
public class QuestionResponseDto {
    private int questionId;
    private String questionTitle;
    private String questionContent;
    @JsonIgnore
    private String createdAt;
    private String lastModifiedAt;
}
