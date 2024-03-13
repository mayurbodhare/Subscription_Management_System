package com.sms.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sms.dao.UserDAO;
import com.sms.dto.UserDTO;
import com.sms.entity.UserEntity;
import com.sms.vo.UserVO;

@Service
public class UserService {
	@Autowired
	private UserDAO userDAO;

	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private PasswordEncoder passwordEncoder;

	public UserVO addNewUser(UserDTO userDTO) {
		UserVO userVO = new UserVO(null, null, null);
		if (userDAO.emailExists(userDTO.getEmail())) {
			userVO.setMessage("Email Already Exist. Please Try With Another Email.");
			userVO.setStatus(0);
		} else {
			UserEntity userEntity = mapper.map(userDTO, UserEntity.class);
			userEntity.setPassword(passwordEncoder.encode(userDTO.getPassword()));
			UserEntity newUserEntity = userDAO.addUser(userEntity);
			UserDTO newUserDTO = mapper.map(newUserEntity, UserDTO.class);
			userVO.setUserDTO(newUserDTO);
			userVO.setMessage("SignUp Successfull.");
			userVO.setStatus(1);
		}
		return userVO;
	}

	public UserVO login(UserDTO userDTO) {
		UserVO userVO = new UserVO(null, null, null);
		if(userDAO.emailExists(userDTO.getEmail())) {
			UserEntity userEntity = userDAO.getUser(userDTO.getEmail());
			String dbHashedPassword = userEntity.getPassword();
			String uiPassword = userDTO.getPassword();
			if(passwordEncoder.matches(uiPassword, dbHashedPassword)) {
				userVO.setUserDTO(mapper.map(userEntity, UserDTO.class));
				userVO.setMessage("Login Successful");
				userVO.setStatus(1);
			}
			else {
				userVO.setMessage("Incorrect Password. Please try again");
				userVO.setStatus(0);
			}
			
		}
		else {
			userVO.setMessage("Email does not exist. Please try again");
			userVO.setStatus(-1);	
		}
		return userVO;
	}
}
