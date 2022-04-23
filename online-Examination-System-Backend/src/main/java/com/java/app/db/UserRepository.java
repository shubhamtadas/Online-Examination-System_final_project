package com.java.app.db;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.java.app.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	@Query("select u from User u where u.username = :username")
	public User getUserByUsername(@Param("username") String username);

}
