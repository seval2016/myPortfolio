package com.portfolio.controller;

import com.portfolio.dto.request.EducationRequest;
import com.portfolio.dto.response.EducationResponse;
import com.portfolio.service.EducationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/educations")
@RequiredArgsConstructor
@Tag(name = "Education", description = "Education management APIs")
public class EducationController {

    private final EducationService educationService;

    @Operation(summary = "Create education for user")
    @PostMapping("/user/{userId}")
    public ResponseEntity<EducationResponse> createEducation(@PathVariable Long userId, @RequestBody EducationRequest request) {
        return ResponseEntity.ok(educationService.createEducation(userId, request));
    }

    @Operation(summary = "Update education by id")
    @PutMapping("/{id}")
    public ResponseEntity<EducationResponse> updateEducation(@PathVariable Long id, @RequestBody EducationRequest request) {
        return ResponseEntity.ok(educationService.updateEducation(id, request));
    }

    @Operation(summary = "Delete education by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEducation(@PathVariable Long id) {
        educationService.deleteEducation(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get education by id")
    @GetMapping("/{id}")
    public ResponseEntity<EducationResponse> getEducationById(@PathVariable Long id) {
        return ResponseEntity.ok(educationService.getEducationById(id));
    }

    @Operation(summary = "Get all educations for user")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<EducationResponse>> getEducationsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(educationService.getEducationsByUserId(userId));
    }
} 