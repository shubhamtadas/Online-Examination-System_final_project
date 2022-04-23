import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student} from 'src/app/components/admin/components/admin-dashboard/model/student';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  url='http://localhost:8080/stu';

  constructor(private http:HttpClient) { }

  updateToken(credentials:any){
    //token generate
    return this.http.put(`${this.url}/update`, credentials)
  }
  getUsers() {
      return this.http.get<Student[]>('http://localhost:8080/stu/getAll');
    }
}
