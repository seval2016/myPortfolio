package com.portfolio.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDate;

@Data
public class CertificateRequest {
    
    @NotBlank(message = "Name is required")
    @Size(max = 100, message = "Name cannot exceed 100 characters")
    private String name;
    
    @NotBlank(message = "Issuing organization is required")
    @Size(max = 100, message = "Issuing organization cannot exceed 100 characters")
    private String issuingOrganization;
    
    @NotNull(message = "Issue date is required")
    @Past(message = "Issue date must be in the past")
    private LocalDate issueDate;
    
    private LocalDate expiryDate;
    
    private String credentialId;
    private String credentialUrl;
    private String imageUrl;
    private String description;
    private Boolean isPublic;
} 