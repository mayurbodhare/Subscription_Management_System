package com.sms.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer planId;
	private String planName;
	private Integer price;
	private Integer duration;
	private Boolean upgradable;
	
//	@OneToOne
//    private SubscriptionEntity subscription;
}
