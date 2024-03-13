package com.sms.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.sms.repository.RelationRepository;

@Repository
public class RelationDAO {
	
	@Autowired
	private RelationRepository relationRepository;

}
