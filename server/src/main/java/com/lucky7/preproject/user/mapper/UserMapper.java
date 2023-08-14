package com.lucky7.preproject.user.mapper;

import com.lucky7.preproject.user.dto.UserPatchDto;
import com.lucky7.preproject.user.dto.UserPostDto;
import com.lucky7.preproject.user.dto.UserResponseDto;
import com.lucky7.preproject.user.entity.User;
import org.mapstruct.Mapper;

import java.util.List;

//implementation 'org.modelmapper:modelmapper:2.4.2' mapper 의존성 주입
@Mapper(componentModel = "spring")
public interface UserMapper {
    User userPostToUser(UserPostDto requestBody);
    User userPatchToUser(UserPatchDto requestBody);
    UserResponseDto userToUserResponseDto(User user);

    List<UserResponseDto> userToUserResponses(List<User> user);
}
