package com.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sms.dto.UserDTO;
import com.sms.service.UserService;
import com.sms.vo.UserVO;

@RestController
@CrossOrigin
public class SMSController {
	
	@Autowired
	private UserService userService;
	
	@PostMapping(value = "signup")
	public UserVO signUp(@RequestBody UserDTO userDTO) {
		return userService.addNewUser(userDTO);
	}
	@PostMapping(value = "login")
	public UserVO login(@RequestBody UserDTO userDTO) {
		return userService.login(userDTO);
	}
	
}
