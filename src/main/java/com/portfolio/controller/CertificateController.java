package com.portfolio.controller;

import com.portfolio.dto.request.CertificateRequest;
import com.portfolio.dto.response.CertificateResponse;
import com.portfolio.service.CertificateService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/certificates")
@RequiredArgsConstructor
@Tag(name = "Certificate", description = "Certificate management APIs")
public class CertificateController {

    private final CertificateService certificateService;

    @Operation(summary = "Create certificate for user")
    @PostMapping("/user/{userId}")
    public ResponseEntity<CertificateResponse> createCertificate(@PathVariable Long userId, @RequestBody CertificateRequest request) {
        return ResponseEntity.ok(certificateService.createCertificate(userId, request));
    }

    @Operation(summary = "Update certificate by id")
    @PutMapping("/{id}")
    public ResponseEntity<CertificateResponse> updateCertificate(@PathVariable Long id, @RequestBody CertificateRequest request) {
        return ResponseEntity.ok(certificateService.updateCertificate(id, request));
    }

    @Operation(summary = "Delete certificate by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCertificate(@PathVariable Long id) {
        certificateService.deleteCertificate(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get certificate by id")
    @GetMapping("/{id}")
    public ResponseEntity<CertificateResponse> getCertificateById(@PathVariable Long id) {
        return ResponseEntity.ok(certificateService.getCertificateById(id));
    }

    @Operation(summary = "Get all certificates for user")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<CertificateResponse>> getCertificatesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(certificateService.getCertificatesByUserId(userId));
    }
} 