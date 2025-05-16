package com.portfolio.dto.request;

import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ProfileRequest {
    
    @Size(max = 1000, message = "About section cannot exceed 1000 characters")
    private String about;
    
    private String title;
    private String location;
    private String phone;
    private String website;
    private String github;
    private String linkedin;
    private String twitter;
    private String instagram;
    private String profileImageUrl;
    private String coverImageUrl;
} 