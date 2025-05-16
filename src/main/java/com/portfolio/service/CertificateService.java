package com.portfolio.service;

import com.portfolio.dto.request.CertificateRequest;
import com.portfolio.dto.response.CertificateResponse;
import java.util.List;

public interface CertificateService {
    CertificateResponse createCertificate(Long userId, CertificateRequest request);
    CertificateResponse updateCertificate(Long id, CertificateRequest request);
    void deleteCertificate(Long id);
    CertificateResponse getCertificateById(Long id);
    List<CertificateResponse> getCertificatesByUserId(Long userId);
} 