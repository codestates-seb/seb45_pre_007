package com.lucky7.preproject.question.service;

<<<<<<< HEAD
import com.lucky7.preproject.comment.entity.QuestionComment;
import com.lucky7.preproject.comment.service.QuestionCommentService;
import com.lucky7.preproject.question.entity.Question;
import com.lucky7.preproject.question.repository.QuestionRepository;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.access.prepost.PreAuthorize;
=======
import com.lucky7.preproject.question.repository.QuestionRepository;
import com.lucky7.preproject.comment.service.QuestionCommentService;
import com.lucky7.preproject.question.entity.Question;
import com.lucky7.preproject.user.entity.User;
import lombok.AllArgsConstructor;
import org.springframework.security.access.AccessDeniedException;
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    // 추후 트랜잭션 구현을 위해 레포지토리가 아닌 서비스에서 DI를 받습니다.
    private final QuestionCommentService questionCommentService;

    /**
     *     서비스에서의 목적은 비즈니스 로직을 처리하는 것 입니다.
     *     엔티티만 다루는 레이어기 때문에 매개변수로 엔티티를 받습니다. (DTO를 받지 않습니다.)
     *     컨트롤러에서 변수를 사용해 결과를 반환하기 위해 서비스에서는 바로 결과를 반환하도록 구현하지 않았습니다.
     *     매퍼는 컨트롤러에서 사용할 예정입니다.
     *     서비스에서는 엔티티를 반환하도록 구현되고 있습니다.
     *     이렇게 설계한 이유는 각각의 역할을 분리하기 위함입니다.
     */


    public Question createQuestion(Question question) {

        return questionRepository.save(question); // 트랜잭션 구현하면 save 안해도 됨
    }

    public List<Question> findAllQuestions() {
        return questionRepository.findAll();
    }
    public Question findQuestion(long questionId) {
//        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        // 예외처리 로직 추가 필요 (존재하지 않는 질문을 조회할 경우)
        // ex) EntityNotFoundException (orElseThrow 사용 등의 방법이 있습니다.)
        Question defaultQuestion = new Question();

        return questionRepository.findById(questionId).orElse(defaultQuestion);
    }

    public Question updateQuestion(long questionId, Question questionToUpdate, User user) {
        //todo : 수정할 권한이 있는지 확인
        Question existingQuestion = findQuestion(questionId);

        if (!existingQuestion.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this question.");
<<<<<<< HEAD
        }
        if (questionToUpdate.getQuestionTitle() != null) {
            existingQuestion.setQuestionTitle(questionToUpdate.getQuestionTitle());
=======
>>>>>>> c92b562a4689b83c157a99c35994b69991a525b4
        }
        if (questionToUpdate.getTitle() != null) {
            existingQuestion.setTitle(questionToUpdate.getTitle());
        }
        if (questionToUpdate.getContent() != null) {
            existingQuestion.setContent(questionToUpdate.getContent());
        }

//        return existingQuestion; 트랜잭션을 구현하면 이걸로 사용
        return questionRepository.save(existingQuestion);
    }

    public void deleteQuestion(long questionId, User user) {
        //todo : 삭제할 권한이 있는지 확인, 해당 Question 이 있는지 확인
        Question question = findQuestion(questionId);

        if (!question.getUser().equals(user)) {
            throw new AccessDeniedException("You do not have permission to update this question.");
        }

        questionRepository.delete(question);
    }
}