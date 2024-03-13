package com.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.SubscriptionDAO;

@Service
public class SubscriptionService {
	@Autowired
	private SubscriptionDAO subscriptionDAO;
	
}
