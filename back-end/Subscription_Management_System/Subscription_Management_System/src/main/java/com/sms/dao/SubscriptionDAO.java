package com.sms.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Repository;

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

	public SubscriptionEntity addSubscription(SubscriptionEntity subscriptionEntity) {
		return subscriptionRepository.save(subscriptionEntity);
	}

	public List<SubscriptionEntity> getAllSubscription() {
		return subscriptionRepository.findAll();
	}

}
