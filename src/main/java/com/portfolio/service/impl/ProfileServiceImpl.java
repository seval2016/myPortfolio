package com.portfolio.service.impl;

import com.portfolio.dto.request.ProfileRequest;
import com.portfolio.dto.response.ProfileResponse;
import com.portfolio.entity.Profile;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.ProfileRepository;
import com.portfolio.service.ProfileService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService {

    private final ProfileRepository profileRepository;

    @Override
    public ProfileResponse getProfileByUserId(Long userId) {
        Profile profile = profileRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for user id: " + userId));
        return mapToProfileResponse(profile);
    }

    @Override
    @Transactional
    public ProfileResponse updateProfile(Long userId, ProfileRequest request) {
        Profile profile = profileRepository.findByUserId(userId)
                .orElseThrow(() -> new ResourceNotFoundException("Profile not found for user id: " + userId));

        profile.setAbout(request.getAbout());
        profile.setTitle(request.getTitle());
        profile.setLocation(request.getLocation());
        profile.setPhone(request.getPhone());
        profile.setWebsite(request.getWebsite());
        profile.setGithub(request.getGithub());
        profile.setLinkedin(request.getLinkedin());
        profile.setTwitter(request.getTwitter());
        profile.setInstagram(request.getInstagram());
        profile.setProfileImageUrl(request.getProfileImageUrl());
        profile.setCoverImageUrl(request.getCoverImageUrl());

        Profile updated = profileRepository.save(profile);
        return mapToProfileResponse(updated);
    }

    private ProfileResponse mapToProfileResponse(Profile profile) {
        ProfileResponse response = new ProfileResponse();
        response.setId(profile.getId());
        response.setAbout(profile.getAbout());
        response.setTitle(profile.getTitle());
        response.setLocation(profile.getLocation());
        response.setPhone(profile.getPhone());
        response.setWebsite(profile.getWebsite());
        response.setGithub(profile.getGithub());
        response.setLinkedin(profile.getLinkedin());
        response.setTwitter(profile.getTwitter());
        response.setInstagram(profile.getInstagram());
        response.setProfileImageUrl(profile.getProfileImageUrl());
        response.setCoverImageUrl(profile.getCoverImageUrl());
        return response;
    }
} 