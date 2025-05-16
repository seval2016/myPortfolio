package com.portfolio.service;

import com.portfolio.dto.request.ExperienceRequest;
import com.portfolio.dto.response.ExperienceResponse;
import java.util.List;

public interface ExperienceService {
    ExperienceResponse createExperience(Long userId, ExperienceRequest request);
    ExperienceResponse updateExperience(Long id, ExperienceRequest request);
    void deleteExperience(Long id);
    ExperienceResponse getExperienceById(Long id);
    List<ExperienceResponse> getExperiencesByUserId(Long userId);
} 