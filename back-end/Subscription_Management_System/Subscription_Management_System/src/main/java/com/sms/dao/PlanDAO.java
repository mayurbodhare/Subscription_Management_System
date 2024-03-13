package com.sms.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sms.repository.PlanRepository;
import com.sms.repository.SubscriptionRepository;

@Repository

public class PlanDAO {
	@Autowired
	private PlanRepository planRepository;
}
