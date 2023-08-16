package com.lucky7.preproject.comment.entity;

import com.lucky7.preproject.answer.entity.Answer;
import com.lucky7.preproject.user.entity.User;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
@Getter
@Setter
public class AnswerComment {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long answerCommentId;

    @Column(length = 255, nullable = false)
    private String answerCommentContent;

    @JoinColumn(name = "USER_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @JoinColumn(name = "ANSWER_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private Answer answer;

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime lastModifiedAt = LocalDateTime.now();
}
