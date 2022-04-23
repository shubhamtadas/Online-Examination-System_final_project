package com.java.app.services;

import com.java.app.model.Student;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.java.app.db.StudentRepository;

import java.util.List;
import java.util.logging.Logger;

@Service
public class StudentServices {

    @Autowired
    private StudentRepository studentRepository;

    public Student addStudent(Student student) {
        return studentRepository.save(student);
    }

    public List<Student> addAllStudents(List<Student> students) {
        return  studentRepository.saveAll(students);
    }

    public Student getStudentByID(int id) {
        return studentRepository.findById(id).orElse(null);
    }

    public Student getStudentByName(String name) {
        return  studentRepository.findByName(name);
    }

    public Student updateStudent(Student student) {
    	Student existingEMP = studentRepository.findById(student.getId()).orElse(null);
        System.out.println(student);
        if(existingEMP == null) {
            System.out.println("Emp not found");
            return  studentRepository.save(student);
        }else  {
            existingEMP.setName(student.getName());
            existingEMP.setUsername(student.getUsername());
            existingEMP.setContact(student.getContact());
            existingEMP.setPassword(student.getPassword());
            studentRepository.save(existingEMP);
        }
        return student;
    }

    public boolean deleteStudentByID(int id) {
    	Student existingEMP = studentRepository.getById(id);
        if(existingEMP != null) {
        	studentRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }
    
    public ResponseEntity<?> loginStudent(@RequestBody Student student) {
		Student existingUser = (Student) studentRepository.getStudentByUsername(student.getUsername());
		System.out.println(student);
		if(existingUser == null) {
			System.out.println("Student Not Found");
			return (ResponseEntity<?>) ResponseEntity.notFound();
		}else if(existingUser.getPassword().equals(student.getPassword()))
		{
			return ResponseEntity.ok(student);
		}
		else {
			return (ResponseEntity<?>) ResponseEntity.badRequest();
		}
	}
    
    public Student updateStudents(@RequestBody Student student) {
		Student existingStudent = (Student) studentRepository.getStudentByUsername(student.getUsername());
		System.out.println(student);
		if(existingStudent == null) {
			System.out.println("Student Not Found");
			//return userRepository.save(user);
		}else {
			//existingUser.setUsername(user.getUsername());
			existingStudent.setPassword(student.getPassword());
			studentRepository.save(existingStudent);
		}
		return student;
		
	}
}