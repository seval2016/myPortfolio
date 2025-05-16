package com.portfolio.service.impl;

import com.portfolio.dto.request.CertificateRequest;
import com.portfolio.dto.response.CertificateResponse;
import com.portfolio.entity.Certificate;
import com.portfolio.entity.User;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.CertificateRepository;
import com.portfolio.repository.UserRepository;
import com.portfolio.service.CertificateService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CertificateServiceImpl implements CertificateService {

    private final CertificateRepository certificateRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public CertificateResponse createCertificate(Long userId, CertificateRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Certificate certificate = new Certificate();
        certificate.setUser(user);
        certificate.setName(request.getName());
        certificate.setIssuer(request.getIssuingOrganization());
        certificate.setIssueDate(request.getIssueDate());
        certificate.setExpiryDate(request.getExpiryDate());
        certificate.setCredentialId(request.getCredentialId());
        certificate.setCredentialUrl(request.getCredentialUrl());
        certificate.setImageUrl(request.getImageUrl());
        Certificate saved = certificateRepository.save(certificate);
        return mapToCertificateResponse(saved);
    }

    @Override
    @Transactional
    public CertificateResponse updateCertificate(Long id, CertificateRequest request) {
        Certificate certificate = certificateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Certificate not found with id: " + id));
        certificate.setName(request.getName());
        certificate.setIssuer(request.getIssuingOrganization());
        certificate.setIssueDate(request.getIssueDate());
        certificate.setExpiryDate(request.getExpiryDate());
        certificate.setCredentialId(request.getCredentialId());
        certificate.setCredentialUrl(request.getCredentialUrl());
        certificate.setImageUrl(request.getImageUrl());
        Certificate updated = certificateRepository.save(certificate);
        return mapToCertificateResponse(updated);
    }

    @Override
    @Transactional
    public void deleteCertificate(Long id) {
        if (!certificateRepository.existsById(id)) {
            throw new ResourceNotFoundException("Certificate not found with id: " + id);
        }
        certificateRepository.deleteById(id);
    }

    @Override
    public CertificateResponse getCertificateById(Long id) {
        Certificate certificate = certificateRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Certificate not found with id: " + id));
        return mapToCertificateResponse(certificate);
    }

    @Override
    public List<CertificateResponse> getCertificatesByUserId(Long userId) {
        List<Certificate> certificates = certificateRepository.findByUserIdOrderByIssueDateDesc(userId);
        return certificates.stream().map(this::mapToCertificateResponse).collect(Collectors.toList());
    }

    private CertificateResponse mapToCertificateResponse(Certificate certificate) {
        CertificateResponse response = new CertificateResponse();
        response.setId(certificate.getId());
        response.setName(certificate.getName());
        response.setIssuer(certificate.getIssuer());
        response.setIssueDate(certificate.getIssueDate());
        response.setExpiryDate(certificate.getExpiryDate());
        response.setCredentialId(certificate.getCredentialId());
        response.setCredentialUrl(certificate.getCredentialUrl());
        response.setImageUrl(certificate.getImageUrl());
        return response;
    }
} 