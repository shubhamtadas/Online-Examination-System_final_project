package com.java.app.services;

import com.java.app.model.Rule;
import com.java.app.db.RuleRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
public class RuleService {

    @Autowired
    private RuleRepository ruleRepository;

    public Rule addRule(Rule rul) {
        return ruleRepository.save(rul);
    }

    public Rule updateRule(Rule rul) {
        Rule existingRULE = ruleRepository.findById(rul.getId()).orElse(null);
        System.out.println(rul);
        if(existingRULE == null) {
            System.out.println("Emp not found");
            return  ruleRepository.save(rul);
        }else  {
            existingRULE.setName(rul.getName());

            ruleRepository.save(existingRULE);
        }
        return rul;
    }

    public boolean deleteRuleByID(int id) {
        Rule existingRULE = ruleRepository.getById(id);
        if(existingRULE != null) {
            ruleRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Rule> getAllRules() {
        return ruleRepository.findAll();
    }
}