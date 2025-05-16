package com.portfolio.dto.response;

import lombok.Data;
import java.time.LocalDate;

@Data
public class EducationResponse {
    private Long id;
    private String school;
    private String degree;
    private String fieldOfStudy;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    private String location;
    private Double gpa;
} 