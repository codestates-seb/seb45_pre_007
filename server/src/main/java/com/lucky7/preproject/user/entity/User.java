package com.lucky7.preproject.user.entity;


import lombok.Getter;
import lombok.Setter;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

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

    @Column(nullable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime lastModifiedAt = LocalDateTime.now();

    //List, Set 같은 컬렉션 타입의 필드는
    // @ElementCollection 애너테이션을 추가하면
    // User 권한 정보와 관련된 별도의 엔티티 클래스를 생성하지 않아도 간단하게 매핑 처리가 가능
    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();
}
