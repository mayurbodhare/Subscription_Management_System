package com.sms.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Repository;

import com.sms.entity.PlanEntity;
import com.sms.entity.SubscriptionEntity;
import com.sms.repository.SubscriptionRepository;

import lombok.extern.slf4j.Slf4j;

@Repository
@Slf4j
public class SubscriptionDAO {
	@Autowired
	private SubscriptionRepository subscriptionRepository;

	public boolean subscriptionExists(String subscriptionName) {
		return subscriptionRepository.existsBySubscriptionName(subscriptionName);
	}

	public SubscriptionEntity saveSubscription(SubscriptionEntity subscriptionEntity) {
		return subscriptionRepository.save(subscriptionEntity);
	}

	public List<SubscriptionEntity> getAllSubscription() {
		return subscriptionRepository.findAll();
	}

	public SubscriptionEntity getSubscriptionById(Integer subscriptionId) {
		Optional<SubscriptionEntity> optional = subscriptionRepository.findById(subscriptionId);
		if(optional.isPresent()) {
			return optional.get();
		}else {
			return null;
		}
	}

	public void removeSubscription(Integer subscriptionId) {
		subscriptionRepository.deleteById(subscriptionId);		
	}

	


}
