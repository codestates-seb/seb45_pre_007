package com.lucky7.preproject.question.controller;

import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("/questions")
public class QuestionController {
    @PostMapping
    public String postQuestion() {
        return "질문이 등록되었습니다.";
    }
    @GetMapping
    public String getQuestions() {
        return "전체 질문 목록입니다.";
    }
    @GetMapping("/{question-id}")
    public String getQuestion() {
        return "1개의 질문과 해당 댓글 목록입니다.";
    }

    @PatchMapping("/{question-id}")
    public String patchQuestion() {
        return "질문이 수정되었습니다.";
    }
    @DeleteMapping("/{question-id}")
    public String deleteQuestion() {
        return "질문이 삭제되었습니다.";
    }
}
