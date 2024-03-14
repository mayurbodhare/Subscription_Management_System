package com.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.SubscriptionDAO;
import com.sms.dto.SubscriptionsObjectDTO;
import com.sms.vo.SubscriptionVO;

@Service
public class SubscriptionService {
	@Autowired
	private SubscriptionDAO subscriptionDAO;

	public static SubscriptionVO addNewSubScription(SubscriptionsObjectDTO subscriptionsObjectDTO) {
		SubscriptionDAO.subscriptionExists(subscriptionsObjectDTO.getSubscriptionDTO().getSubscriptionName().toLowerCase());
		
		return null;
	}
	
	
	
}
