package com.sms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.dto.SubscriptionsObjectDTO;
import com.sms.service.SubscriptionService;
import com.sms.vo.SubscriptionVO;

@RestController
@RequestMapping("admin")
@CrossOrigin
public class AdminController {
	@Autowired
	private SubscriptionService subscriptionService;

	@PostMapping("")
	public SubscriptionVO createSubscription(@RequestBody SubscriptionsObjectDTO subscriptionsObjectDTO) {
		return SubscriptionService.addNewSubScription(subscriptionsObjectDTO);
	}

}
