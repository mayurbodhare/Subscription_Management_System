package com.sms.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.sms.dto.RelationDTO;
import com.sms.entity.RelationEntity;
import com.sms.entity.SubscriptionEntity;
import com.sms.repository.RelationRepository;

@Repository
public class RelationDAO {
	
	@Autowired
	private RelationRepository relationRepository;

	public RelationEntity addSubscription(RelationEntity relationEntity) {
		
		return relationRepository.save(relationEntity);
	}
	
	public boolean checkIfSubscriptionExists(String email, Integer subscriptionId) {
		return relationRepository.existsByEmailIdAndSubscriptionId(email, subscriptionId);
	}
	@Transactional
	public int removeSubscription(String emailId, Integer subscriptionId) {
		 return relationRepository.deleteByEmailIdAndSubscriptionId(emailId, subscriptionId);
	}
	@Transactional
	public int upgradeSubscription(RelationDTO relationDTO) {
		return relationRepository.updatePlanIdBySubscriptionIdAndEmailId(relationDTO.getPlanEntity().getPlanId(), relationDTO.getSubscriptionEntity().getSubscriptionId(), relationDTO.getEmailId());
		
	}
	
}
