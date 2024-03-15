package com.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.entity.PlanEntity;

public interface PlanRepository extends JpaRepository<PlanEntity, Integer>{
}
