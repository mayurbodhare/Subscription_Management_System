package com.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sms.entity.SubscriptionEntity;
import java.util.List;


public interface SubscriptionRepository extends JpaRepository<SubscriptionEntity, Integer> {
	List<SubscriptionEntity> findBySubscriptionName(String subscriptionName);
	boolean existsBySubscriptionName(String subscriptionName);
}