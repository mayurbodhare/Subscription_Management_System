package com.sms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sms.dto.RelationDTO;
import com.sms.dto.SubscriptionsObjectDTO;
import com.sms.dto.UserDTO;
import com.sms.service.UserService;
import com.sms.vo.UserVO;

@RestController
@RequestMapping(value = "user")
@CrossOrigin
public class UserController {

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

	@GetMapping(value = "active")
	public List<SubscriptionsObjectDTO> getActiveSubscriptions(@RequestParam String email) {
		return userService.getActiveSubscriptions(email);
	}

	@PostMapping(value = "buy")
	public UserVO buySubscription(@RequestBody RelationDTO relationDTO) {
		return userService.addSubscription(relationDTO);
	}

	@PostMapping(value = "cancel")
	public UserVO cancelSubscription(@RequestBody RelationDTO relationDTO) {
		return userService.removeSubscription(relationDTO);
	}
	@PostMapping(value = "upgrade")
	public UserVO upgradeSubscription(@RequestBody RelationDTO relationDTO) {
		return userService.upgradeSubscription(relationDTO);
	}
}
