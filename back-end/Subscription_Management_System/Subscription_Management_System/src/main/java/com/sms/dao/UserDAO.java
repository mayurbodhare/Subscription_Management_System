package com.sms.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sms.entity.UserEntity;
import com.sms.repository.UserReposiitory;

@Repository
public class UserDAO {
	@Autowired
	private UserReposiitory userReposiitory;

	public boolean emailExists(String email) {
		return userReposiitory.existsById(email);
	}

	public UserEntity addUser(UserEntity userEntity) {
		return userReposiitory.save(userEntity);
		
	}

}
