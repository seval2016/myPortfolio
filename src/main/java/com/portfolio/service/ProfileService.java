package com.portfolio.service;

import com.portfolio.dto.request.ProfileRequest;
import com.portfolio.dto.response.ProfileResponse;

public interface ProfileService {
    ProfileResponse getProfileByUserId(Long userId);
    ProfileResponse updateProfile(Long userId, ProfileRequest request);
} 