package com.java.app.model;

//import lombok.AllArgsConstructor;
//import lombok.Data;
//import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
//@Data
//@NoArgsConstructor
//@AllArgsConstructor
@Table(name = "questions")
public class Question {

	@Id
	@Column(name = "questionID")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long questionID;

	@Column(name = "question")
	private String question;

	@Column(name = "option1")
	private String option1;

	@Column(name = "option2")
	private String option2;
	
	@Column(name = "option3")
	private String option3;

	@Column(name = "option4")
	private String option4;
	
	@Column(name = "answer")
	private String answer;
	
	@Column(name = "marks")
	private Integer marks;
	
	@Column(name = "subject")
	private String subject;
	

	public String getOption1() {
		return option1;
	}

	public void setOption1(String option1) {
		this.option1 = option1;
	}

	public String getOption2() {
		return option2;
	}

	public void setOption2(String option2) {
		this.option2 = option2;
	}

	public String getOption3() {
		return option3;
	}

	public void setOption3(String option3) {
		this.option3 = option3;
	}

	public String getOption4() {
		return option4;
	}

	public void setOption4(String option4) {
		this.option4 = option4;
	}

	public Long getQuestionID() {
		return questionID;
	}

	public void setQuestionID(Long questionID) {
		this.questionID = questionID;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getAnswer() {
		return answer;
	}

	public void setAnswer(String answer) {
		this.answer = answer;
	}

	public Integer getMarks() {
		return marks;
	}

	public void setMarks(Integer marks) {
		this.marks = marks;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

}
