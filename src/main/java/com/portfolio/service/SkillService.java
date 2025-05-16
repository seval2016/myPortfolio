package com.portfolio.service;

import com.portfolio.dto.request.SkillRequest;
import com.portfolio.dto.response.SkillResponse;
import java.util.List;

public interface SkillService {
    SkillResponse createSkill(Long userId, SkillRequest request);
    SkillResponse updateSkill(Long id, SkillRequest request);
    void deleteSkill(Long id);
    SkillResponse getSkillById(Long id);
    List<SkillResponse> getSkillsByUserId(Long userId);
} 