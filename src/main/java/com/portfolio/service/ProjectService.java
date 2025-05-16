package com.portfolio.service;

import com.portfolio.dto.request.ProjectRequest;
import com.portfolio.dto.response.ProjectResponse;
import java.util.List;

public interface ProjectService {
    ProjectResponse createProject(Long userId, ProjectRequest request);
    ProjectResponse updateProject(Long id, ProjectRequest request);
    void deleteProject(Long id);
    ProjectResponse getProjectById(Long id);
    List<ProjectResponse> getProjectsByUserId(Long userId);
} 