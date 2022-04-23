package com.java.app.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.java.app.model.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
	
	//Question getByName(String name);

   // Question findByName(String name);
}
