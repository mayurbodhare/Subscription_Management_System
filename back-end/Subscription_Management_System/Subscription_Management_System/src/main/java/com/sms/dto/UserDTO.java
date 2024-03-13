package com.sms.dto;

import java.util.List;

import com.sms.entity.RelationEntity;
import com.sms.entity.UserEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
	private String email;
	private String firstName;
	private String lastName;
	private String password;
	
	private List<ActiveSubscriptionsDTO> subscriptions;
}
