package com.portfolio.service;

import com.portfolio.entity.Blog;
import java.util.List;
import java.util.Optional;

public interface BlogService {
    List<Blog> getAllBlogs();
    List<Blog> getPublishedBlogs();
    Optional<Blog> getBlogById(Long id);
    List<Blog> getBlogsByCategory(String category);
    List<Blog> searchBlogs(String title);
    Blog createBlog(Blog blog);
    Blog updateBlog(Long id, Blog blog);
    void deleteBlog(Long id);
    void incrementViewCount(Long id);
} 