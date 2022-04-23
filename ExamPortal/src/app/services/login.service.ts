import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='http://localhost:8080/stu';

  constructor(private http:HttpClient) { }

  //calling the server to generate the generate the token
  generateToken(credentials:any){
    //token generate
    return this.http.post(`${this.url}/token`, credentials)
  }

  //for login user
  loginUser(token:any){
    localStorage.setItem("token",token)
    return true;
  }

  //to check that user is login or not
  isLogedIn()
  {
    let token= localStorage.getItem("token");
    if(token== undefined || token==='' || token==null){
      return false;
    }else
    {
      return true;
    }
  }

  //for logout
  logout(){
    localStorage.removeItem("token");
    return true;
  }

  //for getting the token
  getToken(){
      return localStorage.getItem("token");
  }
}
