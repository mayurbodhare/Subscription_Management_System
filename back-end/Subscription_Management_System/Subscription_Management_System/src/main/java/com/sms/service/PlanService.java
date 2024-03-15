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

	public List<PlanEntity> addAllPlans(List<PlanEntity> plans ) {
		log.info("inside planservices");
		log.info(plans.toString());	
		return planDAO.addAllPlans(plans);
	}

}
