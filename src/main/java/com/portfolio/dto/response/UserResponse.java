package com.portfolio.dto.response;

import com.portfolio.entity.Role;
import lombok.Data;

@Data
public class UserResponse {
    private Long id;
    private String email;
    private String firstName;
    private String lastName;
    private Role role;
    private boolean enabled;
    private ProfileResponse profile;
} 