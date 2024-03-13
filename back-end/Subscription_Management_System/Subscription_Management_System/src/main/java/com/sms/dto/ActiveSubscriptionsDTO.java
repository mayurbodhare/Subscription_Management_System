package com.sms.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ActiveSubscriptionsDTO {
	private SubscriptionDTO subscriptionDTO;
	private PlanDTO planDTO;
}
