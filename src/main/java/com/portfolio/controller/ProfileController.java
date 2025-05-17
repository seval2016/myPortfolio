package com.portfolio.controller;

import com.portfolio.dto.request.ProfileRequest;
import com.portfolio.dto.response.ProfileResponse;
import com.portfolio.service.ProfileService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/profiles")
@RequiredArgsConstructor
@Tag(name = "Profile", description = "Profile management APIs")
public class ProfileController {

    private final ProfileService profileService;

    @Operation(summary = "Get profile by user id")
    @GetMapping("/{userId}")
    public ResponseEntity<ProfileResponse> getProfileByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(profileService.getProfileByUserId(userId));
    }

    @Operation(summary = "Create or update profile by user id")
    @PutMapping("/{userId}")
    public ResponseEntity<ProfileResponse> createOrUpdateProfile(@PathVariable Long userId, @RequestBody ProfileRequest request) {
        try {
            return ResponseEntity.ok(profileService.updateProfile(userId, request));
        } catch (Exception e) {
            return ResponseEntity.ok(profileService.createProfile(userId, request));
        }
    }
} 