package com.portfolio.controller;

import com.portfolio.dto.request.SkillRequest;
import com.portfolio.dto.response.SkillResponse;
import com.portfolio.service.SkillService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
@Tag(name = "Skill", description = "Skill management APIs")
public class SkillController {

    private final SkillService skillService;

    @Operation(summary = "Create skill for user")
    @PostMapping("/user/{userId}")
    public ResponseEntity<SkillResponse> createSkill(@PathVariable Long userId, @RequestBody SkillRequest request) {
        return ResponseEntity.ok(skillService.createSkill(userId, request));
    }

    @Operation(summary = "Update skill by id")
    @PutMapping("/{id}")
    public ResponseEntity<SkillResponse> updateSkill(@PathVariable Long id, @RequestBody SkillRequest request) {
        return ResponseEntity.ok(skillService.updateSkill(id, request));
    }

    @Operation(summary = "Delete skill by id")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSkill(@PathVariable Long id) {
        skillService.deleteSkill(id);
        return ResponseEntity.noContent().build();
    }

    @Operation(summary = "Get skill by id")
    @GetMapping("/{id}")
    public ResponseEntity<SkillResponse> getSkillById(@PathVariable Long id) {
        return ResponseEntity.ok(skillService.getSkillById(id));
    }

    @Operation(summary = "Get all skills for user")
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<SkillResponse>> getSkillsByUserId(@PathVariable Long userId) {
        return ResponseEntity.ok(skillService.getSkillsByUserId(userId));
    }
} 