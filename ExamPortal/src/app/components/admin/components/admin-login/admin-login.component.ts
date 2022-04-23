import { Component, OnInit } from '@angular/core';
import { AdminLoginService } from "src/app/components/admin/services/admin-login.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  credentials = {
    username: '',
    password: ''
  }

  constructor(private adminLoginService: AdminLoginService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if ((this.credentials.username != '' && this.credentials.password != '') && (this.credentials.username != null && this.credentials.password != null)) {

      console.log("we have to submit the form");
      this.adminLoginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log("response");
          this.adminLoginService.loginAdmin(response.token);
          window.location.href="/admin-dashboard";
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
