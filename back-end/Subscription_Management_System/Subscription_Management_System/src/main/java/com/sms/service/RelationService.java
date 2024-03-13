package com.sms.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sms.dao.RelationDAO;

@Service
public class RelationService {
	@Autowired
	private RelationDAO relationDAO;
}
