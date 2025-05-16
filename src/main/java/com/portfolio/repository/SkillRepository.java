package com.portfolio.repository;

import com.portfolio.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    List<Skill> findByUserIdOrderByProficiencyLevelDesc(Long userId);
    List<Skill> findByUserIdAndCategoryOrderByProficiencyLevelDesc(Long userId, String category);
} 