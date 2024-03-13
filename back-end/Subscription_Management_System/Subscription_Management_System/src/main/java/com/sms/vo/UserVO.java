package com.sms.vo;

import com.sms.dto.UserDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserVO {
	private UserDTO userDTO;
	private String message;
	private Integer status;
}
