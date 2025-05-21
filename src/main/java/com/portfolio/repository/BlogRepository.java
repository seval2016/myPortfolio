package com.portfolio.repository;

import com.portfolio.entity.Blog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogRepository extends JpaRepository<Blog, Long> {
    List<Blog> findByIsPublishedTrueOrderByPublishedAtDesc();
    List<Blog> findByCategoryAndIsPublishedTrue(String category);
    List<Blog> findByTitleContainingIgnoreCaseAndIsPublishedTrue(String title);
} 