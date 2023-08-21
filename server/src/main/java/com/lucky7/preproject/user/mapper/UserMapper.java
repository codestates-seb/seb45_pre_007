package com.lucky7.preproject.user.mapper;

import com.lucky7.preproject.user.dto.UserPatchDto;
import com.lucky7.preproject.user.dto.UserPostDto;
import com.lucky7.preproject.user.dto.UserResponseDto;
import com.lucky7.preproject.user.entity.User;
import org.mapstruct.Mapper;

import org.mapstruct.Mapping;


@Mapper(componentModel = "spring") // 수정 사항 없음
public interface UserMapper {
    @Mapping(source = "password", target = "hashedPassword")
    User userPostToUser(UserPostDto requestBody);
    User userPatchToUser(UserPatchDto requestBody);
    UserResponseDto userToUserResponseDto(User user);
}
