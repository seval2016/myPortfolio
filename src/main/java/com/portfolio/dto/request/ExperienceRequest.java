package com.portfolio.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;

@Data
public class ExperienceRequest {
    
    @NotBlank(message = "Company name is required")
    @Size(max = 100, message = "Company name cannot exceed 100 characters")
    private String company;
    
    @NotBlank(message = "Position is required")
    @Size(max = 100, message = "Position cannot exceed 100 characters")
    private String position;
    
    @NotNull(message = "Start date is required")
    @Past(message = "Start date must be in the past")
    private LocalDate startDate;
    
    private LocalDate endDate;
    
    @Size(max = 1000, message = "Description cannot exceed 1000 characters")
    private String description;
    
    private String location;
    private String employmentType;
    private String companyWebsite;
    private String companyLogo;
    private Boolean currentlyWorking;
} 