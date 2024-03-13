package com.sms.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class RelationEntity {
	@Id
	private Integer relationId;
	private String emailId;
//	private Integer subscriptionId;
//	private Integer planId;
	private String startDate;
	private String endDate;
	
	@ManyToOne
	@JoinColumn(name = "email", referencedColumnName = "email")
	private UserEntity userEntity;
	
	@ManyToOne
	@JoinColumn(name = "subscriptionId") // Specify the column name for subscription ID
	private SubscriptionEntity subscriptionEntity;

	@ManyToOne
	@JoinColumn(name = "planId") // Specify the column name for plan ID
	private PlanEntity planEntity;
}
