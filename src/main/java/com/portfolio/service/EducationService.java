package com.portfolio.service;

import com.portfolio.dto.request.EducationRequest;
import com.portfolio.dto.response.EducationResponse;
import java.util.List;

public interface EducationService {
    EducationResponse createEducation(Long userId, EducationRequest request);
    EducationResponse updateEducation(Long id, EducationRequest request);
    void deleteEducation(Long id);
    EducationResponse getEducationById(Long id);
    List<EducationResponse> getEducationsByUserId(Long userId);
} 