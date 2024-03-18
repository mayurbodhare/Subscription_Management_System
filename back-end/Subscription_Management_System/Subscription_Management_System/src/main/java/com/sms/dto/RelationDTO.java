package com.sms.dto;

import com.sms.entity.PlanEntity;
import com.sms.entity.SubscriptionEntity;
import com.sms.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RelationDTO {
	private Integer relationId;
	private String emailId;
	private String startDate;
	private String endDate;
	private UserEntity userEntity;
	private SubscriptionEntity subscriptionEntity;
	private PlanEntity planEntity;
}
