package com.portfolio.controller;

import com.portfolio.dto.request.ExperienceRequest;
import com.portfolio.dto.response.ExperienceResponse;
import com.portfolio.service.ExperienceService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experiences")
@RequiredArgsConstructor
@Tag(name = "Experience", description = "Experience management APIs")
public class ExperienceController {

    private final ExperienceService experienceService;

    @Operation(summary = "Create experience for user")
    @PostMapping("/user/{userId}")
    public ResponseEntity<ExperienceResponse> createExperience(@PathVariable Long userId, @RequestBody ExperienceRequest request) {
        return ResponseEntity.ok(experienceService.createExperience(userId, request));
    }

    @Operation(summary = "Update experience by id")
    @PutMapping("/{id}")
    public ResponseEntity<ExperienceResponse> updateExperience(@PathVariable Long id, @RequestBody ExperienceRequest request) {
        return ResponseEntity.ok(experienceService.updateExperience(id, request));
    }

    @Operation(summary = "Delete experience by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExperience(@PathVariable Long id) {
        experienceService.deleteExperience(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get experience by id")
    @GetMapping("/{id}")
    public ResponseEntity<ExperienceResponse> getExperienceById(@PathVariable Long id) {
        return ResponseEntity.ok(experienceService.getExperienceById(id));
    }

    @Operation(summary = "Get all experiences for user")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<ExperienceResponse>> getExperiencesByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(experienceService.getExperiencesByUserId(userId));
    }
} 