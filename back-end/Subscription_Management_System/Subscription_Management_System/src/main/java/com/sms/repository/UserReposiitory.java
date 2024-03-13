package com.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.entity.UserEntity;

public interface UserReposiitory extends JpaRepository<UserEntity, String> {

}
