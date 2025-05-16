package com.portfolio.service.impl;

import com.portfolio.dto.request.SkillRequest;
import com.portfolio.dto.response.SkillResponse;
import com.portfolio.entity.Skill;
import com.portfolio.entity.User;
import com.portfolio.exception.ResourceNotFoundException;
import com.portfolio.repository.SkillRepository;
import com.portfolio.repository.UserRepository;
import com.portfolio.service.SkillService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SkillServiceImpl implements SkillService {

    private final SkillRepository skillRepository;
    private final UserRepository userRepository;

    @Override
    @Transactional
    public SkillResponse createSkill(Long userId, SkillRequest request) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Skill skill = new Skill();
        skill.setUser(user);
        skill.setName(request.getName());
        skill.setCategory(request.getCategory());
        skill.setDescription(request.getDescription());
        Skill saved = skillRepository.save(skill);
        return mapToSkillResponse(saved);
    }

    @Override
    @Transactional
    public SkillResponse updateSkill(Long id, SkillRequest request) {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found with id: " + id));
        skill.setName(request.getName());

        skill.setCategory(request.getCategory());

        skill.setDescription(request.getDescription());

        Skill updated = skillRepository.save(skill);
        return mapToSkillResponse(updated);
    }

    @Override
    @Transactional
    public void deleteSkill(Long id) {
        if (!skillRepository.existsById(id)) {
            throw new ResourceNotFoundException("Skill not found with id: " + id);
        }
        skillRepository.deleteById(id);
    }

    @Override
    public SkillResponse getSkillById(Long id) {
        Skill skill = skillRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Skill not found with id: " + id));
        return mapToSkillResponse(skill);
    }

    @Override
    public List<SkillResponse> getSkillsByUserId(Long userId) {
        List<Skill> skills = skillRepository.findByUserIdOrderByProficiencyLevelDesc(userId);
        return skills.stream().map(this::mapToSkillResponse).collect(Collectors.toList());
    }

    private SkillResponse mapToSkillResponse(Skill skill) {
        SkillResponse response = new SkillResponse();
        response.setId(skill.getId());
        response.setName(skill.getName());
        response.setLevel(skill.getProficiencyLevel());
        response.setCategory(skill.getCategory());
        response.setDescription(skill.getDescription());
        return response;
    }
}