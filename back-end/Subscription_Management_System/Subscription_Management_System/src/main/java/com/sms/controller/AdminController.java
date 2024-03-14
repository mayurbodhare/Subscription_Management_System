package com.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.dto.SubscriptionDTO;
import com.sms.dto.SubscriptionsObjectDTO;
import com.sms.service.SubscriptionService;
import com.sms.vo.SubscriptionPlanListVO;
import com.sms.vo.SubscriptionVO;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("admin")
@CrossOrigin
@Slf4j
public class AdminController {
	@Autowired
	private SubscriptionService subscriptionService;

	@PostMapping("")
	public SubscriptionPlanListVO createSubscription(@RequestBody SubscriptionDTO subscriptionDTO) {
		return subscriptionService.addNewSubScription(subscriptionDTO);
	}
	
	@GetMapping("")
	public SubscriptionPlanListVO getAllSubscription() {
		return subscriptionService.getAllSubscription();
	}
	

}
