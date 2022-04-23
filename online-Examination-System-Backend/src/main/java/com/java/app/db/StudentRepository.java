package com.java.app.db;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.java.app.model.Student;


public interface StudentRepository extends JpaRepository<Student,Integer>{
	Student getByName(String name);

	Student findByName(String name);
	
	@Query("select u from Student u where u.username = :username")
	public Student getStudentByUsername(@Param("username") String username);
}