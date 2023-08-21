package com.lucky7.preproject.question.dto.responseDto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
// 질문 1개 조회 시 함께 조회할 댓글에 대한 정보입니다.
// 질문에 대한 댓글 C,U,D는 CommentController 작성 시에 구현할 예정입니다.
public class QuestionCommentDto {
    private long questionCommentId; // 추가
    private String commentUser;
    private String commentContent;
    private String createdAt;
    private String lastModifiedAt;
//    private String avatarImg; // 추후에 추가할 예정
}
