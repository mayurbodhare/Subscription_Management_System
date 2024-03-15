package com.sms.entity;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer subscriptionId;
	private String subscriptionName;
	
	@OneToMany
    private List<PlanEntity> plans;

}