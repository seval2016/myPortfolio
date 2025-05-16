package com.portfolio.dto.response;

import lombok.Data;
import java.time.LocalDate;

@Data
public class CertificateResponse {
    private Long id;
    private String name;
    private String issuer;
    private LocalDate issueDate;
    private LocalDate expiryDate;
    private String credentialId;
    private String credentialUrl;
    private String imageUrl;
} 