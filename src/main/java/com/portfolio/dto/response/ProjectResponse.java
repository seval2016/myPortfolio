package com.portfolio.dto.response;

import lombok.Data;
import java.time.LocalDate;
import java.util.List;

@Data
public class ProjectResponse {
    private Long id;
    private String title;
    private String description;
    private LocalDate startDate;
    private LocalDate endDate;
    private String projectUrl;
    private String githubUrl;
    private String imageUrl;
    private String videoUrl;
    private List<String> technologies;
    private List<String> features;
    private String client;
    private String role;
    private Boolean isPublic;
} 