package com.portfolio.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;

@Data
public class EducationRequest {
    
    @NotBlank(message = "School name is required")
    @Size(max = 100, message = "School name cannot exceed 100 characters")
    private String school;
    
    @NotBlank(message = "Degree is required")
    @Size(max = 100, message = "Degree cannot exceed 100 characters")
    private String degree;
    
    @NotBlank(message = "Field of study is required")
    @Size(max = 100, message = "Field of study cannot exceed 100 characters")
    private String fieldOfStudy;
    
    @NotNull(message = "Start date is required")
    @Past(message = "Start date must be in the past")
    private LocalDate startDate;
    
    private LocalDate endDate;
    
    @Size(max = 500, message = "Description cannot exceed 500 characters")
    private String description;
    
    private String location;
    private String grade;
    private String activities;
    private String imageUrl;
} 