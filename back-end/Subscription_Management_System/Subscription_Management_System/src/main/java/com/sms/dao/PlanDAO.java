package com.sms.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sms.entity.PlanEntity;
import com.sms.repository.PlanRepository;
import com.sms.repository.SubscriptionRepository;

@Repository

public class PlanDAO {
	@Autowired
	private PlanRepository planRepository;

	public List<PlanEntity> addAllPlans(List<PlanEntity> plans) {
		return planRepository.saveAll(plans);
		
	}
}
