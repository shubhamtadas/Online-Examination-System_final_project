import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Student } from 'src/app/components/admin/components/admin-dashboard/model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  addStuURL : string;
  getStuURL : string;
  updateStuUrl : string;
  deleteStuUrl : string;

  constructor(private http : HttpClient) {

    this.addStuURL = 'http://localhost:8080/stu/addStudent';
    this.getStuURL = 'http://localhost:8080/stu/getAll';
    this.updateStuUrl = 'http://localhost:8080/stu/updateStudent';
    this.deleteStuUrl = 'http://localhost:8080/stu/deleteStudentById';

   }

   addStudent(stu : Student): Observable<Student> {
     return this.http.post<Student>(this.addStuURL,stu);
   }

   getAllStudent(): Observable<Student[]>{
     return this.http.get<Student[]>(this.getStuURL);
   }

   updateStudent(stu :Student) : Observable<Student>{
     return this.http.put<Student>(this.updateStuUrl, stu);
   }

   deleteStudent(stu : Student) : Observable<Student> {
     return this.http.delete<Student>(this.deleteStuUrl+'/'+stu.id);
   }


}
