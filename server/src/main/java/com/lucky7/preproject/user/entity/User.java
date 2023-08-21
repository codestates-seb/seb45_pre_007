package com.lucky7.preproject.user.entity;


import javax.persistence.EntityListeners;

import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@EntityListeners(AuditingEntityListener.class)
@Entity(name = "users") // DB에서 “user”는 예약어로 지정되어 있는 경우가 있음
@Getter
@Setter //추가
public class User {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long userId;

    @Column(length = 10, nullable = false)
    private String userName;

    @Column(length = 20, nullable = false)
    private String userEmail;

    @Column(length = 255, nullable = false)
    private String hashedUserPassword;

    @Column
    private String avatarImg = "https://i.ibb.co/p2JB7v6/lucky-7-min-min.png";

    @Column(nullable = false)
    @CreatedDate
    private LocalDateTime createdAt;

    @Column(nullable = false)
    @LastModifiedDate
    private LocalDateTime lastModifiedAt;

    //List, Set 같은 컬렉션 타입의 필드는
    // @ElementCollection 애너테이션을 추가하면
    // User 권한 정보와 관련된 별도의 엔티티 클래스를 생성하지 않아도 간단하게 매핑 처리가 가능
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

}
