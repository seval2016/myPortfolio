package com.portfolio.service;

import com.portfolio.dto.request.LoginRequest;
import com.portfolio.dto.request.RegisterRequest;
import com.portfolio.dto.response.UserResponse;

public interface UserService {
    UserResponse register(RegisterRequest request);
    String login(LoginRequest request);
    UserResponse getCurrentUser();
    UserResponse getUserById(Long id);
    UserResponse updateUser(Long id, RegisterRequest request);
    void deleteUser(Long id);
    void enableUser(Long id);
    void disableUser(Long id);
} 