package com.sms.dto;

import java.util.List;

import com.sms.entity.PlanEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionDTO {
	private Integer subscriptionId;
	private String subscriptionName;
	private List<PlanEntity> plans;
}
