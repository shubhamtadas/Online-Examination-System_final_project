package com.java.app.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.java.app.db.QuestionRepository;
import com.java.app.model.Question;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "questions")

public class QuestionController {
	
	@Autowired
	private QuestionRepository quesRepository;
	
	@GetMapping("/get/{id}")
	public Question getQues(@PathVariable("id") long id) {
		return quesRepository.findById(id).orElse(null);
	}
	
	@GetMapping("/get")
	public List<Question> getQuess() {
		return quesRepository.findAll();
	}
	
	@PostMapping("/add")
	public void createQues(@RequestBody Question ques) {
		quesRepository.save(ques);
	}
	
	@PostMapping("/addAll")
	public void createQuess(@RequestBody List<Question> quess) {
		quesRepository.saveAll(quess);
	}
	
	@PutMapping("/updateQuestion")
	public Question updateQuestion(@RequestBody Question ques) {
		Question existingEMP = quesRepository.findById(ques.getQuestionID()).orElse(null);
        System.out.println(ques);
        if(existingEMP == null) {
            System.out.println("Emp not found");
            return  quesRepository.save(ques);
        }else  {
            existingEMP.setQuestion(ques.getQuestion());
            existingEMP.setOption1(ques.getOption1());
            existingEMP.setOption2(ques.getOption2());
            existingEMP.setOption3(ques.getOption3());
            existingEMP.setOption4(ques.getOption4());
            existingEMP.setAnswer(ques.getAnswer());
            existingEMP.setMarks(ques.getMarks());
            existingEMP.setSubject(ques.getSubject());
            quesRepository.save(existingEMP);
        }
        return ques;
	}
	
	@SuppressWarnings("deprecation")
	@DeleteMapping("/deleteQuestion/{id}")
	public Question deleteQues(@PathVariable("id") long id) {
		Question ques1 = quesRepository.getOne(id);
		quesRepository.deleteById(id);
		return ques1;
	}

}
