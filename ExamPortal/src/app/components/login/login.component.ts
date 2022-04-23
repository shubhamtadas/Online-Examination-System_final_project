import { Component, OnInit } from '@angular/core';
import { LoginService } from "src/app/services/login.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private loginService: LoginService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {

      console.log("we have to submit the form");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log("response");
          this.loginService.loginUser(response.token);
          window.location.href="/dashboard";
          this.snack.open('Login Successful !!' , 'OK',{
            duration: 3000,
            verticalPosition:'top',
          })
        },
        (error:any)=>{
          console.log("error");
          this.snack.open('Invalid Username or Password !!' , 'OK',{
            duration: 3000,
            verticalPosition:'top',
          })
        }
      )
    } else {
      console.log("Fields are required!");
      this.snack.open('Fields are required !!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
    }
  }

}
