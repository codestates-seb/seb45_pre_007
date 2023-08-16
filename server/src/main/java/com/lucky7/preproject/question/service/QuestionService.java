package com.lucky7.preproject.question.service;

import com.lucky7.preproject.question.entity.Question;
import com.lucky7.preproject.question.repository.QuestionRepository;
import com.lucky7.preproject.user.entity.User;
import com.lucky7.preproject.user.repository.UserRepository;
import lombok.AllArgsConstructor;
//import org.springframework.beans.factory.support.SecurityContextProvider;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.context.SecurityContext;
//import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final UserRepository userRepository;

    /**
     *     서비스에서의 목적은 비즈니스 로직을 처리하는 것 입니다.
     *     엔티티만 다루는 레이어기 때문에 매개변수로 엔티티를 받습니다. (DTO를 받지 않습니다.)
     *     컨트롤러에서 변수를 사용해 결과를 반환하기 위해 서비스에서는 바로 결과를 반환하도록 구현하지 않았습니다.
     *     매퍼는 컨트롤러에서 사용할 예정입니다.
     *     서비스에서는 엔티티를 반환하도록 구현되고 있습니다.
     *     이렇게 설계한 이유는 각각의 역할을 분리하기 위함입니다.
     */
    public Question createQuestion(Question question) {

        //로그인된 사용자 정보를 service 에서 찾아서 사용하느냐, controller 에서 찾아서 사용하느냐,
//        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
//        String userName = authentication.getName();
//        User user = userRepository.findByUserName(userName).get();
//
//        question.setUser(user);
//
        return questionRepository.save(question); // 트랜잭션 구현하면 save 안해도 됨
    }

    public List<Question> getAllQuestions() {
        return questionRepository.findAll();
    }
    public Question getQuestion(long questionId) {
//        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        // 예외처리 로직 추가 필요 (존재하지 않는 질문을 조회할 경우)
        // ex) EntityNotFoundException (orElseThrow 사용 등의 방법이 있습니다.)
        Question defaultQuestion = new Question();
        return questionRepository.findById(questionId).orElse(defaultQuestion);
    }

    public Question updateQuestion(long questionId, Question questionDataToUpdate) {
        //todo : 수정할 권한이 있는지 확인
        Question existingQuestion = getQuestion(questionId);

        if(questionDataToUpdate.getQuestionTitle() != null) {
            existingQuestion.setQuestionTitle(questionDataToUpdate.getQuestionTitle());
        }
        if (questionDataToUpdate.getQuestionContent() != null) {
            existingQuestion.setQuestionContent(questionDataToUpdate.getQuestionContent());
        }

//        return existingQuestion; 트랜잭션을 구현하면 이걸로 사용
        return questionRepository.save(existingQuestion);
    }

    public void deleteQuestion(long questionId) {
        //todo : 삭제할 권한이 있는지 확인, 해당 Question 이 있는지 확인
        Question question = getQuestion(questionId);
        questionRepository.delete(question);
    }
}