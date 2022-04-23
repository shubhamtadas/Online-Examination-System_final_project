package com.java.app.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.java.app.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	
	@Query("select u from Admin u where u.username = :username")
	public Admin getUserByUsername(@Param("username") String username);

}
