package com.portfolio.dto.response;

import lombok.Data;

@Data
public class ProfileResponse {
    private Long id;
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