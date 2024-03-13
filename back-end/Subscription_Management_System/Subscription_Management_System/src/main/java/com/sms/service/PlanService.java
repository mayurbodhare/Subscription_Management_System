package com.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.PlanDAO;

@Service
public class PlanService {
	@Autowired
	private PlanDAO planDAO;
}
