package com.portfolio.service.impl;

import com.portfolio.entity.Blog;
import com.portfolio.repository.BlogRepository;
import com.portfolio.service.BlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class BlogServiceImpl implements BlogService {

    private final BlogRepository blogRepository;

    @Autowired
    public BlogServiceImpl(BlogRepository blogRepository) {
        this.blogRepository = blogRepository;
    }

    @Override
    public List<Blog> getAllBlogs() {
        return blogRepository.findAll();
    }

    @Override
    public List<Blog> getPublishedBlogs() {
        return blogRepository.findByIsPublishedTrueOrderByPublishedAtDesc();
    }

    @Override
    public Optional<Blog> getBlogById(Long id) {
        return blogRepository.findById(id);
    }

    @Override
    public List<Blog> getBlogsByCategory(String category) {
        return blogRepository.findByCategoryAndIsPublishedTrue(category);
    }

    @Override
    public List<Blog> searchBlogs(String title) {
        return blogRepository.findByTitleContainingIgnoreCaseAndIsPublishedTrue(title);
    }

    @Override
    public Blog createBlog(Blog blog) {
        return blogRepository.save(blog);
    }

    @Override
    public Blog updateBlog(Long id, Blog blogDetails) {
        return blogRepository.findById(id)
                .map(existingBlog -> {
                    existingBlog.setTitle(blogDetails.getTitle());
                    existingBlog.setDescription(blogDetails.getDescription());
                    existingBlog.setImageUrl(blogDetails.getImageUrl());
                    existingBlog.setThumbnailUrl(blogDetails.getThumbnailUrl());
                    existingBlog.setImageAlt(blogDetails.getImageAlt());
                    existingBlog.setCategory(blogDetails.getCategory());
                    existingBlog.setPublished(blogDetails.isPublished());
                    existingBlog.setReadingTime(blogDetails.getReadingTime());
                    return blogRepository.save(existingBlog);
                })
                .orElseThrow(() -> new RuntimeException("Blog not found with id: " + id));
    }

    @Override
    public void deleteBlog(Long id) {
        blogRepository.deleteById(id);
    }

    @Override
    public void incrementViewCount(Long id) {
        blogRepository.findById(id).ifPresent(blog -> {
            blog.setViewCount(blog.getViewCount() + 1);
            blogRepository.save(blog);
        });
    }
} 