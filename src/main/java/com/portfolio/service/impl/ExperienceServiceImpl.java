package com.portfolio.service.impl;

import com.portfolio.dto.request.ExperienceRequest;
import com.portfolio.dto.response.ExperienceResponse;
import com.portfolio.entity.Experience;
import com.portfolio.entity.User;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ExperienceRepository;
import com.portfolio.repository.UserRepository;
import com.portfolio.service.ExperienceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ExperienceServiceImpl implements ExperienceService {

    private final ExperienceRepository experienceRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public ExperienceResponse createExperience(Long userId, ExperienceRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Experience experience = new Experience();
        experience.setUser(user);
        experience.setCompany(request.getCompany());
        experience.setTitle(request.getPosition());
        experience.setStartDate(request.getStartDate());
        experience.setEndDate(request.getEndDate());
        experience.setDescription(request.getDescription());
        experience.setLocation(request.getLocation());
        experience.setEmploymentType(request.getEmploymentType());
        experience.setCurrent(request.getCurrentlyWorking() != null ? request.getCurrentlyWorking() : false);
        Experience saved = experienceRepository.save(experience);
        return mapToExperienceResponse(saved);
    }

    @Override
    @Transactional
    public ExperienceResponse updateExperience(Long id, ExperienceRequest request) {
        Experience experience = experienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Experience not found with id: " + id));
        experience.setCompany(request.getCompany());
        experience.setTitle(request.getPosition());
        experience.setStartDate(request.getStartDate());
        experience.setEndDate(request.getEndDate());
        experience.setDescription(request.getDescription());
        experience.setLocation(request.getLocation());
        experience.setEmploymentType(request.getEmploymentType());
        experience.setCurrent(request.getCurrentlyWorking() != null ? request.getCurrentlyWorking() : false);
        Experience updated = experienceRepository.save(experience);
        return mapToExperienceResponse(updated);
    }

    @Override
    @Transactional
    public void deleteExperience(Long id) {
        if (!experienceRepository.existsById(id)) {
            throw new ResourceNotFoundException("Experience not found with id: " + id);
        }
        experienceRepository.deleteById(id);
    }

    @Override
    public ExperienceResponse getExperienceById(Long id) {
        Experience experience = experienceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Experience not found with id: " + id));
        return mapToExperienceResponse(experience);
    }

    @Override
    public List<ExperienceResponse> getExperiencesByUserId(Long userId) {
        List<Experience> experiences = experienceRepository.findByUserIdOrderByStartDateDesc(userId);
        return experiences.stream().map(this::mapToExperienceResponse).collect(Collectors.toList());
    }

    private ExperienceResponse mapToExperienceResponse(Experience experience) {
        ExperienceResponse response = new ExperienceResponse();
        response.setId(experience.getId());
        response.setCompany(experience.getCompany());
        response.setPosition(experience.getTitle());
        response.setStartDate(experience.getStartDate());
        response.setEndDate(experience.getEndDate());
        response.setDescription(experience.getDescription());
        response.setLocation(experience.getLocation());
        response.setEmploymentType(experience.getEmploymentType());
        response.setCurrentlyWorking(experience.isCurrent());
        return response;
    }
} 