package com.java.app.db;
import com.java.app.model.Rule;
import org.springframework.data.jpa.repository.JpaRepository;
public interface RuleRepository extends JpaRepository<Rule,Integer> {
	Rule getByName(String name);

	Rule findByName(String name);
}