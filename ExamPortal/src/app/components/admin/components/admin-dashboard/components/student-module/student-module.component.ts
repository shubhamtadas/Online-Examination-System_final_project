import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl,Validators } from '@angular/forms'
import { Student} from 'src/app/components/admin/components/admin-dashboard/model/student';
import { StudentService } from 'src/app/components/admin/components/admin-dashboard/services/student.service';
import { MustMatch } from 'src/app/components/admin/components/admin-dashboard/components/student-module/_helpers/must-match.validator';

@Component({
  selector: 'app-student-module',
  templateUrl: './student-module.component.html',
  styleUrls: ['./student-module.component.css']
})
export class StudentModuleComponent implements OnInit {
  stuDetail !: FormGroup;
    stuObj : Student = new Student();
    stuList : Student[] = [];

    constructor(private formBuilder : FormBuilder, private stuService : StudentService) { }

    ngOnInit(): void {

      this.getAllStudent();

      this.stuDetail = this.formBuilder.group({
        id : [''],
      //  name : ['',Validators.required],
      name:['',[Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
        // contact: ['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
        contact:['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
        username: ['',[Validators.required,Validators.email]],
       password: ['', Validators.required]
         }, {
           validator: MustMatch('contact', 'password')
      });
    }

    addStudent() {
      console.log(this.stuDetail);
      this.stuObj.id = this.stuDetail.value.id;
      this.stuObj.name = this.stuDetail.value.name;
      this.stuObj.contact= this.stuDetail.value.contact;
      this.stuObj.username = this.stuDetail.value.username;
    this.stuObj.password= this.stuDetail.value.password;
      this.stuService.addStudent(this.stuObj).subscribe(res=>{
          console.log(res);
          this.getAllStudent();
      },err=>{
          console.log(err);
      });

    }

    getAllStudent() {
      this.stuService.getAllStudent().subscribe(res=>{
          this.stuList = res;
      },err=>{
        console.log("error while fetching data.")
      });
    }

    editStudent(stu: Student) {
      this.stuDetail.controls['id'].setValue(stu.id);

      this.stuDetail.controls['name'].setValue(stu.name);
     this.stuDetail.controls['username'].setValue(stu.username);
      this.stuDetail.controls['contact'].setValue(stu.contact);
      this.stuDetail.controls['password'].setValue(stu.password);
    }

    updateStudent() {

      this.stuObj.id = this.stuDetail.value.id;
      this.stuObj.name = this.stuDetail.value.name;
      this.stuObj.contact = this.stuDetail.value.contact;
      this.stuObj.username = this.stuDetail.value.username;
    this.stuObj.password = this.stuDetail.value.password;
      this.stuService.updateStudent(this.stuObj).subscribe(res=>{
        console.log(res);
        this.getAllStudent();
      },err=>{
        console.log(err);
      })

    }

    deleteStudent(stu : Student) {

      this.stuService.deleteStudent(stu).subscribe(res=>{
        console.log(res);
      //  alert('Student deleted successfully');
        this.getAllStudent();
      },err => {
        console.log(err);
      });

    }

  }
