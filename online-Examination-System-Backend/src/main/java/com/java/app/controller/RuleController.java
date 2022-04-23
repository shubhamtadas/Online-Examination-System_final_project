package com.java.app.controller;

import com.java.app.model.Rule;
import com.java.app.services.RuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/emp")
public class RuleController {

    @Autowired
    private RuleService ruleService;

    @PostMapping("/addRule")
    public Rule addRule(@RequestBody Rule rul) {
        return ruleService.addRule(rul);
    }


    // Update Rule
    @PutMapping("/updateRule")
    public Rule updateRule(@RequestBody Rule rul) {
        return ruleService.updateRule(rul);
    }
    
    
    // Delete Rule
    @DeleteMapping("/deleteRuleById/{id}")
    public boolean deleteRuleByID(@PathVariable int id) {
        return ruleService.deleteRuleByID(id);
    }

    // Get all employee
    @GetMapping("/getAll")
    public List<Rule> getAllRule() {
        return ruleService.getAllRules();
    }
}