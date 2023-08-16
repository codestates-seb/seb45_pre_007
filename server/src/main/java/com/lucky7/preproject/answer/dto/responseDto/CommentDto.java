package com.lucky7.preproject.answer.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
public class CommentDto {
    private Long commentUser;
    private String commentContent;
    private LocalDateTime createdAt;
    private LocalDateTime lastModifiedAt;
}
