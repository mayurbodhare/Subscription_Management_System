package com.sms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sms.dto.PlanDTO;
import com.sms.dto.SubscriptionDTO;
import com.sms.service.PlanService;
import com.sms.service.SubscriptionService;
import com.sms.vo.SubscriptionPlanListVO;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("admin")
@CrossOrigin
@Slf4j
public class AdminController {
	@Autowired
	private SubscriptionService subscriptionService;
	
	@Autowired
	private PlanService planService;

	@PostMapping("")
	public SubscriptionPlanListVO createSubscription(@RequestBody SubscriptionDTO subscriptionDTO) {
		return subscriptionService.addNewSubScription(subscriptionDTO);
	}

	@GetMapping("")
	public List<SubscriptionDTO> getAllSubscription() {
		return subscriptionService.getAllSubscription();
	}
	@GetMapping("{subscriptionId}")
	public SubscriptionDTO getSubscriptionById(@PathVariable Integer subscriptionId) {
		return subscriptionService.getOneSubscription(subscriptionId);
	}	
	
	@PutMapping("{subscriptionId}")
	public SubscriptionPlanListVO updateSubscription(@PathVariable Integer subscriptionId, @RequestBody SubscriptionDTO subscriptionDTO) {
		log.info("Inside updateSubscription");
		return subscriptionService.updateSubscription(subscriptionId, subscriptionDTO);
	}
	
	@DeleteMapping("{subscriptionId}")
	public SubscriptionPlanListVO deleteSubscription(@PathVariable Integer subscriptionId) {
		return subscriptionService.deleteSubscription(subscriptionId);
	}
	
	@PostMapping("updateplan")
	public boolean updatePlan(@RequestBody PlanDTO planDTO) {
		log.info(planDTO.toString());
		return planService.updatePlan(planDTO);
	}
}
