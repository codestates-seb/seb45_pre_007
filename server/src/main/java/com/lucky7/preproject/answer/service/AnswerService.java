package com.lucky7.preproject.answer.service;

import com.lucky7.preproject.answer.entity.Answer;
import com.lucky7.preproject.answer.repository.AnswerRepository;
import com.lucky7.preproject.question.entity.Question;
import com.lucky7.preproject.question.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionRepository questionRepository;

    public Answer createAnswer(long questionId, Answer answer) {
        /**
         *         Answer 엔티티에 Question 엔티티가 연관관계로 매핑되어 있기 때문에
         *         Question 엔티티를 QuestionRepository를 통해 가져옵니다.
         *         Question 엔티티를 가져오지 못했을 경우, 즉 존재하지 않는 QuestionId를 요청했을 경우
         *         Answer를 생성하지 않고 null을 반환합니다.
         */
        Question question = questionRepository.findById(questionId).orElse(null);
        if (question == null) {
            return null;
        } else {
            answer.setQuestion(question);
            return answerRepository.save(answer);
        }
    }

    public  Answer updateAnswer(long questionId, long answerId, Answer answerToUpdate) {
        // 수정 요청받은 questionId와 answerId로 해당 Answer를 찾습니다.
        Answer existingAnswer = answerRepository.findById(answerId).orElse(null);

        // Answer 가 존재하지 않을 경우, 즉 존재하지 않는 answerId를 요청했을 경우
        if (existingAnswer == null || existingAnswer.getQuestion().getQuestionId() != questionId) {
            return null;
        }
        if (answerToUpdate.getAnswerContent() != null) {
            existingAnswer.setAnswerContent(answerToUpdate.getAnswerContent());
        }
        return answerRepository.save(existingAnswer);
    }

    public List<Answer> getAllAnswers(long questionId) {
        Question question = questionRepository.findById(questionId).orElse(null);
        if (question == null) {
            return null;
        } else {
            // findAllByQuestion() 메서드를 통해 Question 엔티티 > 연관된 Answer 엔티티들을 가져옵니다.
            return answerRepository.findAllByQuestion(question);
        }
    }

    public Answer deleteAnswer(long questionId, long answerId) {
        Answer existingAnswer = answerRepository.findById(answerId).orElse(null);

        if (existingAnswer == null || existingAnswer.getQuestion().getQuestionId() != questionId) {
            return null;
        }

        answerRepository.delete(existingAnswer);
        return existingAnswer;
    }
}
