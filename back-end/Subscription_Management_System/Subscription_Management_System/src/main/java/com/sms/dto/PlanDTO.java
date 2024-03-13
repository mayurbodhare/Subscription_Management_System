package com.sms.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PlanDTO {
	private Integer planId;
	private String PlanName;
	private Integer price;
	private Integer duration;
	private Boolean upgradable;
}
