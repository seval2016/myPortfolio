package com.portfolio.service.impl;

import com.portfolio.dto.request.EducationRequest;
import com.portfolio.dto.response.EducationResponse;
import com.portfolio.entity.Education;
import com.portfolio.entity.User;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.EducationRepository;
import com.portfolio.repository.UserRepository;
import com.portfolio.service.EducationService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EducationServiceImpl implements EducationService {

    private final EducationRepository educationRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public EducationResponse createEducation(Long userId, EducationRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Education education = new Education();
        education.setUser(user);
        education.setSchool(request.getSchool());
        education.setDegree(request.getDegree());
        education.setFieldOfStudy(request.getFieldOfStudy());
        education.setStartDate(request.getStartDate());
        education.setEndDate(request.getEndDate());
        education.setDescription(request.getDescription());
        education.setLocation(request.getLocation());
        education.setGpa(request.getGrade() != null ? Double.valueOf(request.getGrade()) : null);
        Education saved = educationRepository.save(education);
        return mapToEducationResponse(saved);
    }

    @Override
    @Transactional
    public EducationResponse updateEducation(Long id, EducationRequest request) {
        Education education = educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Education not found with id: " + id));
        education.setSchool(request.getSchool());
        education.setDegree(request.getDegree());
        education.setFieldOfStudy(request.getFieldOfStudy());
        education.setStartDate(request.getStartDate());
        education.setEndDate(request.getEndDate());
        education.setDescription(request.getDescription());
        education.setLocation(request.getLocation());
        education.setGpa(request.getGrade() != null ? Double.valueOf(request.getGrade()) : null);
        Education updated = educationRepository.save(education);
        return mapToEducationResponse(updated);
    }

    @Override
    @Transactional
    public void deleteEducation(Long id) {
        if (!educationRepository.existsById(id)) {
            throw new ResourceNotFoundException("Education not found with id: " + id);
        }
        educationRepository.deleteById(id);
    }

    @Override
    public EducationResponse getEducationById(Long id) {
        Education education = educationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Education not found with id: " + id));
        return mapToEducationResponse(education);
    }

    @Override
    public List<EducationResponse> getEducationsByUserId(Long userId) {
        List<Education> educations = educationRepository.findByUserIdOrderByStartDateDesc(userId);
        return educations.stream().map(this::mapToEducationResponse).collect(Collectors.toList());
    }

    private EducationResponse mapToEducationResponse(Education education) {
        EducationResponse response = new EducationResponse();
        response.setId(education.getId());
        response.setSchool(education.getSchool());
        response.setDegree(education.getDegree());
        response.setFieldOfStudy(education.getFieldOfStudy());
        response.setStartDate(education.getStartDate());
        response.setEndDate(education.getEndDate());
        response.setDescription(education.getDescription());
        response.setLocation(education.getLocation());
        response.setGpa(education.getGpa());
        return response;
    }
} 