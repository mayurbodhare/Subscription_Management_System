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
public class UserEntity {
	@Id
	private String email;
	private String firstName;
	private String lastName;
	private String password;
//	subscribed table
	@OneToMany(mappedBy = "emailId")
    private List<RelationEntity> relations;
}
