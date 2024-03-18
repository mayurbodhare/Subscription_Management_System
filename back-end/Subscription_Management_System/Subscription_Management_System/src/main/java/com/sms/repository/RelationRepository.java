package com.sms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.sms.entity.RelationEntity;

public interface RelationRepository extends JpaRepository<RelationEntity, Integer> {
	
	    @Query("SELECT CASE WHEN COUNT(relation) > 0 THEN true ELSE false END FROM RelationEntity relation WHERE relation.emailId = :emailId AND relation.subscriptionEntity.subscriptionId = :subscriptionId")
	    boolean existsByEmailIdAndSubscriptionId(@Param("emailId") String emailId, @Param("subscriptionId") Integer subscriptionId);
	    
//	    @Transactional
	    @Modifying
	    @Query("DELETE FROM RelationEntity r WHERE r.emailId = :emailId AND r.subscriptionEntity.subscriptionId = :subscriptionId")
	    int deleteByEmailIdAndSubscriptionId(@Param("emailId") String emailId, @Param("subscriptionId") Integer subscriptionId);
	    
	    @Modifying
	    @Query("UPDATE RelationEntity r SET r.planEntity.planId = :planId WHERE r.subscriptionEntity.subscriptionId = :subscriptionId AND r.emailId = :emailId")
	    int updatePlanIdBySubscriptionIdAndEmailId(@Param("planId") Integer planId, @Param("subscriptionId") Integer subscriptionId, @Param("emailId") String emailId);

	}

