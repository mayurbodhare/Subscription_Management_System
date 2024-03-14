package com.sms.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

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
}
