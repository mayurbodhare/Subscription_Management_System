package com.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sms.entity.RelationEntity;
import com.sms.entity.SubscriptionEntity;

public interface RelationRepository extends JpaRepository<RelationEntity, Integer> {
	
	    @Query("SELECT CASE WHEN COUNT(relation) > 0 THEN true ELSE false END FROM RelationEntity relation WHERE relation.emailId = :emailId AND relation.subscriptionEntity.subscriptionId = :subscriptionId")
	    boolean existsByEmailIdAndSubscriptionId(@Param("emailId") String emailId, @Param("subscriptionId") Integer subscriptionId);
	}


