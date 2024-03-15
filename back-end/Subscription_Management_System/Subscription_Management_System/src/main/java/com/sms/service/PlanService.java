package com.sms.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.PlanDAO;
import com.sms.entity.PlanEntity;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class PlanService {
	@Autowired
	private PlanDAO planDAO;

	public List<PlanEntity> saveAllPlans(List<PlanEntity> plans ) {
		return planDAO.saveAllPlans(plans);
	}

	public void removePlan(Integer planId) {
		log.info("inside planservices  => removePlan");
		log.info(planId.toString());	
		planDAO.removePlanById(planId);
	}

	public void removeAllPlans(List<PlanEntity> planEntities) {
		planDAO.removeAllPlans(planEntities);
		
	}

}
