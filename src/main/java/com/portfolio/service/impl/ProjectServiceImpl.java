package com.portfolio.service.impl;

import com.portfolio.dto.request.ProjectRequest;
import com.portfolio.dto.response.ProjectResponse;
import com.portfolio.entity.Project;
import com.portfolio.entity.User;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ProjectRepository;
import com.portfolio.repository.UserRepository;
import com.portfolio.service.ProjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository projectRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public ProjectResponse createProject(Long userId, ProjectRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Project project = new Project();
        project.setUser(user);
        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setStartDate(request.getStartDate());
        project.setEndDate(request.getEndDate());
        project.setUrl(request.getProjectUrl());
        project.setGithubUrl(request.getGithubUrl());
        project.setImageUrl(request.getImageUrl());
        project.setCurrent(false);
        Project saved = projectRepository.save(project);
        return mapToProjectResponse(saved);
    }

    @Override
    @Transactional
    public ProjectResponse updateProject(Long id, ProjectRequest request) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
        project.setTitle(request.getTitle());
        project.setDescription(request.getDescription());
        project.setStartDate(request.getStartDate());
        project.setEndDate(request.getEndDate());
        project.setUrl(request.getProjectUrl());
        project.setGithubUrl(request.getGithubUrl());
        project.setImageUrl(request.getImageUrl());
        project.setTechnologies(request.getTechnologies());
        project.setCurrent(false);
        Project updated = projectRepository.save(project);
        return mapToProjectResponse(updated);
    }

    @Override
    @Transactional
    public void deleteProject(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new ResourceNotFoundException("Project not found with id: " + id);
        }
        projectRepository.deleteById(id);
    }

    @Override
    public ProjectResponse getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Project not found with id: " + id));
        return mapToProjectResponse(project);
    }

    @Override
    public List<ProjectResponse> getProjectsByUserId(Long userId) {
        List<Project> projects = projectRepository.findByUserIdOrderByStartDateDesc(userId);
        return projects.stream().map(this::mapToProjectResponse).collect(Collectors.toList());
    }

    private ProjectResponse mapToProjectResponse(Project project) {
        ProjectResponse response = new ProjectResponse();
        response.setId(project.getId());
        response.setTitle(project.getTitle());
        response.setDescription(project.getDescription());
        response.setStartDate(project.getStartDate());
        response.setEndDate(project.getEndDate());
        response.setProjectUrl(project.getUrl());
        response.setGithubUrl(project.getGithubUrl());
        response.setImageUrl(project.getImageUrl());
        response.setTechnologies(project.getTechnologies());
        return response;
    }
} 