package com.sms.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionEntity {
	@Id
	private Integer subscriptionId;
	private String subscriptionName;
	
	@OneToMany(mappedBy = "planId")
    private List<PlanEntity> plans;

}