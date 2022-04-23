import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms'
import { Question } from 'src/app/components/admin/components/admin-dashboard/model/question';
import { QuestionService } from 'src/app/components/admin/components/admin-dashboard/services/question.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-question-module',
  templateUrl: './question-module.component.html',
  styleUrls: ['./question-module.component.css']
})
export class QuestionModuleComponent implements OnInit {

  queDetail !: FormGroup;
  queObj: Question = new Question();
  queList: Question[] = [];

  constructor(private formBuilder: FormBuilder, private queService: QuestionService, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this.getAllQuestion();

    this.queDetail = this.formBuilder.group({
      questionID: [''],
      question: ['',Validators.required],
      option1: ['',Validators.required],
      option2: ['',Validators.required],
      option3: ['',Validators.required],
      option4: ['',Validators.required],
      answer: ['',Validators.required],
      marks: ['',Validators.required],
      subject: ['',Validators.required]

    });

  }

  addQuestion() {
    console.log(this.queDetail);
    this.queObj.questionID = this.queDetail.value.questionID;
    this.queObj.question = this.queDetail.value.question;
    this.queObj.option1 = this.queDetail.value.option1;
    this.queObj.option2 = this.queDetail.value.option2;
    this.queObj.option3 = this.queDetail.value.option3;
    this.queObj.option4 = this.queDetail.value.option4;
    this.queObj.answer = this.queDetail.value.answer;
    this.queObj.marks = this.queDetail.value.marks;
    this.queObj.subject = this.queDetail.value.subject;

    this.queService.addQuestion(this.queObj).subscribe(res => {
      console.log(res);
      this.snack.open('Question Added Successfully!!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
      this.getAllQuestion();
    }, err => {
      console.log(err);
    });

  }

  getAllQuestion() {
    this.queService.getAllQuestion().subscribe(res => {
      this.queList = res;
    }, err => {
      console.log("error while fetching data.")
      this.snack.open('error while fetching data!!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
    });
  }

  editQuestion(que: Question) {
    this.queDetail.controls['questionID'].setValue(que.questionID);
    this.queDetail.controls['question'].setValue(que.question);
    this.queDetail.controls['option1'].setValue(que.option1);
    this.queDetail.controls['option2'].setValue(que.option2);
    this.queDetail.controls['option3'].setValue(que.option3);
    this.queDetail.controls['option4'].setValue(que.option4);
    this.queDetail.controls['answer'].setValue(que.answer);
    this.queDetail.controls['marks'].setValue(que.marks);
    this.queDetail.controls['subject'].setValue(que.subject);

  }

  updateQuestion() {

    this.queObj.questionID = this.queDetail.value.questionID;
    this.queObj.question = this.queDetail.value.question;
    this.queObj.option1 = this.queDetail.value.option1;
    this.queObj.option2 = this.queDetail.value.option2;
    this.queObj.option3 = this.queDetail.value.option3;
    this.queObj.option4 = this.queDetail.value.option4;
    this.queObj.answer = this.queDetail.value.answer;
    this.queObj.marks = this.queDetail.value.marks;
    this.queObj.subject = this.queDetail.value.subject;

    this.queService.updateQuestion(this.queObj).subscribe(res => {
      console.log(res);
      this.snack.open('Question Updated Successfully!!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
      this.getAllQuestion();
    }, err => {
      console.log(err);
    })

  }

  deleteQuestion(que: Question) {

    this.queService.deleteQuestion(que).subscribe(res => {
      console.log(res);
      this.snack.open('Question Deleted Successfully!!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
      this.getAllQuestion();
    }, err => {
      console.log(err);
    });

  }
}
