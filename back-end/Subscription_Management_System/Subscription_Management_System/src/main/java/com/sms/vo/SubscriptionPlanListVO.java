package com.sms.vo;

import com.sms.dto.SubscriptionDTO;
import com.sms.dto.SubscriptionObjectPlanListDTO;
import com.sms.dto.SubscriptionsObjectDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionPlanListVO {
	private SubscriptionDTO subscriptionDTO;
	private String message;
	private Integer Status; 
}