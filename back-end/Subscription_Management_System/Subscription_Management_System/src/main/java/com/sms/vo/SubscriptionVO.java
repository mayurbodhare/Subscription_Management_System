package com.sms.vo;

import com.sms.dto.PlanDTO;
import com.sms.dto.SubscriptionDTO;
import com.sms.dto.SubscriptionsObjectDTO;
import com.sms.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionVO {
	private SubscriptionsObjectDTO subscriptionsObjectDTO;
	private String message;
	private Integer Status; 
}
