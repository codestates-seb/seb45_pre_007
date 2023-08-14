package com.lucky7.preproject.question.controller;

import com.lucky7.preproject.question.dto.requestDto.QuestionPatchDto;
import com.lucky7.preproject.question.dto.requestDto.QuestionPostDto;
import com.lucky7.preproject.question.dto.responseDto.AllQuestionsResponseDto;
import com.lucky7.preproject.question.dto.responseDto.CommentDto;
import com.lucky7.preproject.question.dto.responseDto.QuestionResponseDto;
import com.lucky7.preproject.question.dto.responseDto.SingleQuestionResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/questions")
@CrossOrigin
public class QuestionController {
    @PostMapping
    public ResponseEntity<?> postQuestion(@RequestBody QuestionPostDto questionPostDto) {

        QuestionResponseDto question1 = new QuestionResponseDto();
        question1.setQuestionId(1);
        question1.setQuestionTitle("질문 제목");
        question1.setQuestionContent("질문 내용");
        question1.setCreatedAt("2022-08-16 17:30:57");

        return new ResponseEntity<>(question1, HttpStatus.CREATED);
    }
    @GetMapping
    public ResponseEntity<List<AllQuestionsResponseDto>> getQuestions() {
            List<AllQuestionsResponseDto> questions = new ArrayList<>();

        AllQuestionsResponseDto question1 = new AllQuestionsResponseDto();
        question1.setQuestionId(1);
        question1.setQuestionTitle("질문 제목");
        question1.setQuestionContent("질문 내용");
        question1.setQuestionUser("질문 작성자");
        question1.setCreateAt("2022-08-16 17:30:57");
        question1.setLastModifiedAt("질문 수정 날짜");

        questions.add(question1);
        return new ResponseEntity<>(questions, HttpStatus.OK);
    }
    @GetMapping("/{question-id}")
    public ResponseEntity<?> getQuestion(@PathVariable("question-id") int questionId) {
        SingleQuestionResponseDto singleQuestionResponseDto = new SingleQuestionResponseDto();
        singleQuestionResponseDto.setQuestionId(questionId);
        singleQuestionResponseDto.setQuestionTitle("질문 제목");
        singleQuestionResponseDto.setQuestionContent("질문 내용");
        singleQuestionResponseDto.setQuestionUser("질문 작성자");
        singleQuestionResponseDto.setCreatedAt("작성 날짜");
        singleQuestionResponseDto.setLastModifiedAt("질문 수정 날짜");

        // 댓글 기능 구현 전이라서 stub 데이터를 List 형태로 담아주고 있다.
        // 여러 개의 댓글 중 예시 댓글1을 commentDto 객체로 간주한다.
        CommentDto commentDto = new CommentDto();
        commentDto.setCommentUser("작성자");
        commentDto.setCommentContent("댓글 내용");
        commentDto.setCreatedAt("댓글 작성 날짜");
        commentDto.setAvatarImg("url");

        List<CommentDto> questionComments = new ArrayList<>();
        questionComments.add(commentDto);

        // 질문에 달린 댓글 List를 담아주고 있다.
        singleQuestionResponseDto.setQuestionComments(questionComments);

        return new ResponseEntity<>(singleQuestionResponseDto, HttpStatus.OK);
    }
    @PatchMapping("/{question-id}")
    public ResponseEntity<?> patchQuestion(@PathVariable("question-id") int questionId,
                                @RequestBody QuestionPatchDto questionPatchDto) {
        QuestionResponseDto responseDto = new QuestionResponseDto();
        responseDto.setQuestionId(questionId);
        responseDto.setQuestionTitle(questionPatchDto.getQuestionTitle());
        responseDto.setQuestionContent(questionPatchDto.getQuestionContent());
        responseDto.setLastModifiedAt("2022-08-16 17:30:57");

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }
    @DeleteMapping("/{question-id}")
    public ResponseEntity<?> deleteQuestion(@PathVariable("question-id") int questionId) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
