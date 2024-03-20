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

	public List<PlanEntity> saveAllPlans(List<PlanEntity> plans) {
		return planRepository.saveAll(plans);
		
	}

	public void removePlanById(Integer planId) {
		planRepository.deleteById(planId);
		
	}

	public void removeAllPlans(List<PlanEntity> planEntities) {
		planRepository.deleteAll(planEntities);
	}
	
	public boolean updatePlan(PlanEntity planEntity) {
		PlanEntity planEntity1 = planRepository.findById(planEntity.getPlanId()).orElse(null);
		 if (planEntity1 != null) {
	            planEntity1.setPlanName(planEntity.getPlanName());
	            planEntity1.setPrice(planEntity.getPrice());
	            planEntity1.setDuration(planEntity.getDuration());
	            planEntity1.setUpgradable(planEntity.getUpgradable());

	            // Save the updated plan
	            planRepository.save(planEntity1);
	            return true;
	        }
		 return false;
	}

	

}
