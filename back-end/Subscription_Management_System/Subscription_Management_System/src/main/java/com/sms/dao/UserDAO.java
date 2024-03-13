package com.sms.dao;

import java.util.Optional;

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

	public UserEntity getUser(String email) {
		Optional<UserEntity> optional = userReposiitory.findById(email);
		if(optional.isPresent()) {
			return optional.get();
		}
		else {
			return null;
		}
	}

}
