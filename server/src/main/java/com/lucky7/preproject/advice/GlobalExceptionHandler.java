package com.lucky7.preproject.advice;

import com.lucky7.preproject.auth.errorresponse.ErrorResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class GlobalExceptionHandler {
    @ExceptionHandler(AccessDeniedException.class)
    private ResponseEntity<ErrorResponse> handleAccessDeniedException(AccessDeniedException e){
        log.error(e.getMessage());
        System.out.println("GET!");
        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    }
}
