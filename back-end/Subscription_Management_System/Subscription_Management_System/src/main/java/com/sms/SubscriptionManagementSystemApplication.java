package com.sms;

import org.modelmapper.ModelMapper;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import lombok.extern.slf4j.Slf4j;

@SpringBootApplication
@Slf4j
public class SubscriptionManagementSystemApplication {

	public static void main(String[] args) {
		log.info("Inside Main App!!!");
		SpringApplication.run(SubscriptionManagementSystemApplication.class, args);
	}
	
	

}
