import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Admin } from "src/app/components/admin/model/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminForgotService {

  url='http://localhost:8080/admin';

  constructor(private http:HttpClient) { }

  updateToken(credentials:any){
    //token generate
    return this.http.put(`${this.url}/update`, credentials)
  }
  getAdmins() {
      return this.http.get<Admin[]>('http://localhost:8080/admin/get');
    }
}
