package com.portfolio.dto.response;

import lombok.Data;

@Data
public class SkillResponse {
    private Long id;
    private String name;
    private Integer level;
    private String category;
    private String icon;
    private String description;
    private Integer yearsOfExperience;
    private Boolean isPublic;
} 