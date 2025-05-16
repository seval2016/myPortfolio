package com.portfolio.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class SkillRequest {
    
    @NotBlank(message = "Name is required")
    @Size(max = 50, message = "Name cannot exceed 50 characters")
    private String name;
    
    @NotNull(message = "Level is required")
    private Integer level;
    
    private String category;
    private String icon;
    private String description;
    private Integer yearsOfExperience;
    private Boolean isPublic;
} 