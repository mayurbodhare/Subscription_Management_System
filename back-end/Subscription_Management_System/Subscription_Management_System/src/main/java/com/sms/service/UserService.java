package com.sms.service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.sms.dao.RelationDAO;
import com.sms.dao.UserDAO;
import com.sms.dto.PlanDTO;
import com.sms.dto.RelationDTO;
import com.sms.dto.SubscriptionDTO;
import com.sms.dto.SubscriptionsObjectDTO;
import com.sms.dto.UserDTO;
import com.sms.entity.PlanEntity;
import com.sms.entity.RelationEntity;
import com.sms.entity.SubscriptionEntity;
import com.sms.entity.UserEntity;
import com.sms.vo.UserVO;

@Service
public class UserService {
	@Autowired
	private UserDAO userDAO;

	@Autowired
	private RelationDAO relationDAO;

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
		if (userDAO.emailExists(userDTO.getEmail())) {
			UserEntity userEntity = userDAO.getUser(userDTO.getEmail());
			String dbHashedPassword = userEntity.getPassword();
			String uiPassword = userDTO.getPassword();
			if (passwordEncoder.matches(uiPassword, dbHashedPassword)) {

				userVO.setUserDTO(mapper.map(userEntity, UserDTO.class));
				userVO.getUserDTO().setSubscriptions(getActiveSubscriptions(userDTO.getEmail()));
				userVO.setMessage("Login Successful");
				userVO.setStatus(1);
			} else {
				userVO.setMessage("Incorrect Password. Please try again");
				userVO.setStatus(0);
			}

		} else {
			userVO.setMessage("Email does not exist. Please try again");
			userVO.setStatus(-1);
		}
		return userVO;
	}

	public List<SubscriptionsObjectDTO> getActiveSubscriptions(String email) {
		UserEntity userEntity = userDAO.getUser(email);
		List<SubscriptionsObjectDTO> list = new ArrayList<>();
		List<RelationEntity> relationEntities = userEntity.getRelations();
		for (RelationEntity relationEntity : relationEntities) {
			SubscriptionsObjectDTO dto = new SubscriptionsObjectDTO();
			SubscriptionEntity subscriptionEntity = relationEntity.getSubscriptionEntity();
			PlanEntity planEntity = relationEntity.getPlanEntity();
			SubscriptionDTO subscriptionDTO = mapper.map(subscriptionEntity, SubscriptionDTO.class);
			PlanDTO planDTO = mapper.map(planEntity, PlanDTO.class);
			planDTO.setStartDate(relationEntity.getStartDate());
			planDTO.setEndDate(relationEntity.getEndDate());
			dto.setSubscriptionDTO(subscriptionDTO);
			dto.setPlanDTO(planDTO);
			list.add(dto);
		}
//	
		return list;
	}

//	public UserVO addSubscription(RelationDTO relationDTO) {
//		UserVO userVO = new UserVO(null, null, null);
//		RelationEntity relationEntity = mapper.map(relationDTO, RelationEntity.class);
//		RelationEntity relationEntityReceived = relationDAO.addSubscription(relationEntity);
//		userVO.getUserDTO().setSubscriptions(getActiveSubscriptions(relationDTO.getEmailId()));
//		userVO.setMessage("Subscription added successfully");
//		userVO.setStatus(1);
//		return userVO;
//	}
	public UserVO addSubscription(RelationDTO relationDTO) {
		UserVO userVO = new UserVO(null, null, null);
		String startDateString = relationDTO.getStartDate();
		Integer duration = relationDTO.getPlanEntity().getDuration();
		LocalDate startDate = LocalDate.parse(startDateString, DateTimeFormatter.ofPattern("dd-MM-yyyy"));
		LocalDate endDate = startDate.plusMonths(duration);
		relationDTO.setEndDate(endDate.format(DateTimeFormatter.ofPattern("dd-MM-yyyy")));
	    
		RelationEntity relationEntity = mapper.map(relationDTO, RelationEntity.class);
		if (relationDAO.checkIfSubscriptionExists(relationDTO.getEmailId(),
				relationDTO.getSubscriptionEntity().getSubscriptionId())) {
			userVO.setMessage("Already Subscribed");
			userVO.setStatus(0);
		} else {
			
			RelationEntity relationEntityReceived = relationDAO.addSubscription(relationEntity);

			if (userVO.getUserDTO() == null) {
				userVO.setUserDTO(new UserDTO());
			}

			userVO.getUserDTO().setSubscriptions(getActiveSubscriptions(relationDTO.getEmailId()));
			userVO.setMessage("Subscription added successfully");
			userVO.setStatus(1);
		}

		return userVO;
	}
}
