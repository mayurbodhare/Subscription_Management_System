package com.sms.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sms.repository.UserReposiitory;

@Repository
public class UserDAO {
	@Autowired
	private UserReposiitory userReposiitory;

}
