package com.sms.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlanEntity {
	@Id
	private Integer planId;
	private String PlanName;
	private Integer price;
	private Integer duration;
	private Boolean upgradable;
	
	@ManyToOne
    private SubscriptionEntity subscription;
}
