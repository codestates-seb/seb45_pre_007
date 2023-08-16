package com.lucky7.preproject.question.entity;

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
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

@Entity
@Getter
@Setter
public class Question {
    @GeneratedValue(strategy = GenerationType.IDENTITY) // strategy 공부
    @Id //springframework.data.id와 @Document는 비관계형 데이터베이스를 사용할 때 쓰인다.
    private Long questionId;

    @Column(length = 20, nullable = false)
    private String questionTitle;

    @Column(length = 255, nullable = false)
    private String questionContent;

    @JoinColumn(name = "USER_ID")
    @ManyToOne(fetch = FetchType.LAZY)
    private User user;

    @Column(nullable = false)
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(nullable = false)
    @LastModifiedDate
    private LocalDateTime lastModifiedAt;
}
