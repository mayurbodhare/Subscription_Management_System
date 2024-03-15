package com.sms.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.SubscriptionDAO;
import com.sms.dto.SubscriptionDTO;
import com.sms.entity.PlanEntity;
import com.sms.entity.SubscriptionEntity;
import com.sms.vo.SubscriptionPlanListVO;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class SubscriptionService {
	@Autowired
	private SubscriptionDAO subscriptionDAO;

	@Autowired
	private PlanService planService;

	@Autowired
	private ModelMapper mapper;

	public SubscriptionPlanListVO addNewSubScription(SubscriptionDTO subscriptionDTO) {

		SubscriptionPlanListVO subscriptionPlanListVO = new SubscriptionPlanListVO(null, null, null);

		if (this.subscriptionNameIsExists(subscriptionDTO.getSubscriptionName().toLowerCase())) {
			subscriptionPlanListVO.setMessage("This Subscription Already Exists. Please try with different Subscription Name.");
			subscriptionPlanListVO.setStatus(0);
		} else {
			SubscriptionEntity subscriptionEntity = mapper.map(subscriptionDTO, SubscriptionEntity.class);
			subscriptionEntity.setSubscriptionName(subscriptionEntity.getSubscriptionName().toLowerCase());

			List<PlanEntity> plansList = planService.addAllPlans(subscriptionDTO.getPlans());
			subscriptionEntity.setPlans(plansList);

			SubscriptionEntity newSubscriptionEntity = subscriptionDAO.addSubscription(subscriptionEntity);
			SubscriptionDTO newSubscriptionDTO = mapper.map(newSubscriptionEntity, SubscriptionDTO.class);

			subscriptionPlanListVO.setSubscriptionDTO(newSubscriptionDTO);
			subscriptionPlanListVO.setMessage("Subscription added Sucessfully.");
			subscriptionPlanListVO.setStatus(1);
		}
		return subscriptionPlanListVO;
	}

	private boolean subscriptionNameIsExists(String subscriptionName) {
		return subscriptionDAO.subscriptionExists(subscriptionName);
	}

	public List<SubscriptionDTO> getAllSubscription() {
		List<SubscriptionEntity> subscriptionEntities = subscriptionDAO.getAllSubscription();
		List<SubscriptionDTO> subscriptionDTOs = mapper.map(subscriptionEntities,new TypeToken<List<SubscriptionDTO>>() {}.getType());
		return subscriptionDTOs;
	}

}
