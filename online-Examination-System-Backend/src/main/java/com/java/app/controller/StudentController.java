package com.java.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.app.model.Student;
import com.java.app.services.StudentServices;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/stu")
public class StudentController {

    @Autowired
    private StudentServices studentService;

    // Add new student
    @PostMapping("/addStudent")
    public Student addStudent(@RequestBody Student student) {
        return studentService.addStudent(student);
    }

    // Add more than 1 student
    @PostMapping("/addStudents")
    public List<Student> addAllStudents(@RequestBody List<Student> students) {
        return studentService.addAllStudents(students);
    }

    // Get student by Id
    @GetMapping("/getStudentByID/{id}")
    public Student getStudentById(@PathVariable int id) {
        return studentService.getStudentByID(id);
    }

    // Get student by name
    @GetMapping("/getStudentByName/{name}")
    public  Student getStudentByName(@PathVariable String name) {
        return studentService.getStudentByName(name);
    }

    // Update student
    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        return studentService.updateStudent(student);
    }

    // Delete student
    @DeleteMapping("/deleteStudentById/{id}")
    public boolean deleteStudentByID(@PathVariable int id) {
        return studentService.deleteStudentByID(id);
    }

    // Get all student
    @GetMapping("/getAll")
    public List<Student> getAllStudent() {
        return studentService.getAllStudents();
    }
    
    //Student Login
    @PostMapping("/token")
    public ResponseEntity<?> loginStudent(@RequestBody Student student) {
    	return studentService.loginStudent(student);
    }
    
    //Password Update
    @PutMapping("/update")
    public Student updateStudents(@RequestBody Student student) {
    	return studentService.updateStudents(student);
    }
   
}