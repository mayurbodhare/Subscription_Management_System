package com.sms.service;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Objects;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.SubscriptionDAO;
import com.sms.dto.PlanDTO;
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

// Create
	public SubscriptionPlanListVO addNewSubScription(SubscriptionDTO subscriptionDTO) {

		SubscriptionPlanListVO subscriptionPlanListVO = new SubscriptionPlanListVO(null, null, null);

		if (this.subscriptionNameIsExists(subscriptionDTO.getSubscriptionName().toLowerCase())) {
			subscriptionPlanListVO
					.setMessage("This Subscription Already Exists. Please try with different Subscription Name.");
			subscriptionPlanListVO.setStatus(0);
		} else {
			SubscriptionEntity subscriptionEntity = mapper.map(subscriptionDTO, SubscriptionEntity.class);
			subscriptionEntity.setSubscriptionName(subscriptionEntity.getSubscriptionName().toLowerCase());

			List<PlanEntity> plansList = planService.saveAllPlans(subscriptionDTO.getPlans());
			subscriptionEntity.setPlans(plansList);

			SubscriptionEntity newSubscriptionEntity = subscriptionDAO.saveSubscription(subscriptionEntity);
			SubscriptionDTO newSubscriptionDTO = mapper.map(newSubscriptionEntity, SubscriptionDTO.class);

			subscriptionPlanListVO.setSubscriptionDTO(newSubscriptionDTO);
			subscriptionPlanListVO.setMessage("Subscription added Sucessfully.");
			subscriptionPlanListVO.setStatus(1);
		}
		return subscriptionPlanListVO;
	}

//Read
	public List<SubscriptionDTO> getAllSubscription() {
		List<SubscriptionEntity> subscriptionEntities = subscriptionDAO.getAllSubscription();
		List<SubscriptionDTO> subscriptionDTOs = mapper.map(subscriptionEntities,
				new TypeToken<List<SubscriptionDTO>>() {
				}.getType());
		return subscriptionDTOs;
	}

	public SubscriptionDTO getOneSubscription(Integer subscriptionId) {
		SubscriptionEntity subscriptionEntity = subscriptionDAO.getSubscriptionById(subscriptionId);
		SubscriptionDTO subscriptionDTO = mapper.map(subscriptionEntity, SubscriptionDTO.class);
		return subscriptionDTO;
	}

//	Update
	public SubscriptionPlanListVO updateSubscription(Integer subscriptionId, SubscriptionDTO subscriptionDTO) {
		SubscriptionPlanListVO subscriptionPlanListVO = new SubscriptionPlanListVO(null, null, null);
		SubscriptionDTO oldSubscriptionDTO = this.getOneSubscription(subscriptionId);

		log.warn(oldSubscriptionDTO.toString());

		if (Objects.nonNull(oldSubscriptionDTO)) {

			if (subscriptionDTO.getSubscriptionName() != null) {
				oldSubscriptionDTO.setSubscriptionName(subscriptionDTO.getSubscriptionName());
			}
			if (subscriptionDTO.getPlans() != null) {
				List<PlanEntity> newPlans = subscriptionDTO.getPlans();
				List<PlanEntity> oldPlans = oldSubscriptionDTO.getPlans();
				for (PlanEntity newPlan : newPlans) {
					// Check if the new plan already exists in old plans
					boolean planExists = oldPlans.stream()
							.anyMatch(plan -> plan.getPlanId().equals(newPlan.getPlanId()));
					if (planExists) {
						// Replace the old plan with the new plan
						oldPlans.replaceAll(plan -> plan.getPlanId().equals(newPlan.getPlanId()) ? newPlan : plan);
					} else {
						// If the new plan doesn't exist in old plans, add it
						oldPlans.add(newPlan);
					}
				}
				planService.saveAllPlans(oldPlans);
			}

			SubscriptionEntity subscriptionEntity = mapper.map(oldSubscriptionDTO, SubscriptionEntity.class);
			subscriptionEntity.setSubscriptionName(subscriptionEntity.getSubscriptionName().toLowerCase());
			SubscriptionEntity newSubscriptionEntity = subscriptionDAO.saveSubscription(subscriptionEntity);
			SubscriptionDTO newSubscriptionDTO = mapper.map(newSubscriptionEntity, SubscriptionDTO.class);

			subscriptionPlanListVO.setSubscriptionDTO(newSubscriptionDTO);
			subscriptionPlanListVO.setMessage("Subscription updated Sucessfully.");
			subscriptionPlanListVO.setStatus(1);

		} else {
			subscriptionPlanListVO.setMessage("Subscription Does Not Present Earlier.");
			subscriptionPlanListVO.setStatus(0);
		}
		return subscriptionPlanListVO;
	}

//Delete	
	public SubscriptionPlanListVO deleteSubscription(Integer subscriptionId) {
		SubscriptionPlanListVO subscriptionPlanListVO = new SubscriptionPlanListVO(null, null, null);
		SubscriptionDTO subscriptionDTO = this.getOneSubscription(subscriptionId);
		if (Objects.nonNull(subscriptionDTO)) {
			subscriptionDAO.removeSubscription(subscriptionId);
			subscriptionPlanListVO.setMessage("Subscription Deleted Successfully.");
			subscriptionPlanListVO.setStatus(1);
		} else {
			subscriptionPlanListVO.setMessage("Subscription Does Not Present Earlier.");
			subscriptionPlanListVO.setStatus(0);
		}
		return subscriptionPlanListVO;
	}

//	Helper
	private boolean subscriptionNameIsExists(String subscriptionName) {
		return subscriptionDAO.subscriptionExists(subscriptionName);
	}


}
