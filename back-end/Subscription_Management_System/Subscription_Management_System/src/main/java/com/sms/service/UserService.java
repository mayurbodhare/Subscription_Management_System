package com.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.UserDAO;

@Service
public class UserService {
	@Autowired
	private UserDAO userDAO;
}
