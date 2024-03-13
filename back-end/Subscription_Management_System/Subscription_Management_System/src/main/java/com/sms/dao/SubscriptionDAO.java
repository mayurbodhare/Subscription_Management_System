package com.sms.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sms.repository.SubscriptionRepository;

@Repository
public class SubscriptionDAO {
	@Autowired
	private SubscriptionRepository subscriptionRepository;
	
}
