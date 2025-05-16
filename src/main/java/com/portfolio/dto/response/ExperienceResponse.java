package com.portfolio.dto.response;

import lombok.Data;
import java.time.LocalDate;

@Data
public class ExperienceResponse {
    private Long id;
    private String company;
    private String position;
    private LocalDate startDate;
    private LocalDate endDate;
    private String description;
    private String location;
    private String employmentType;
    private String companyWebsite;
    private String companyLogo;
    private Boolean currentlyWorking;
} 