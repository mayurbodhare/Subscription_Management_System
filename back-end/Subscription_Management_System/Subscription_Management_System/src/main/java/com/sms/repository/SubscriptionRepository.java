package com.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.entity.SubscriptionEntity;

public interface SubscriptionRepository extends JpaRepository<SubscriptionEntity, Integer> {

}
