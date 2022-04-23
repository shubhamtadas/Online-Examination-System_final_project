import { Component, OnInit } from '@angular/core';
import { User } from "src/app/model/user";
import { ForgotPasswordService } from "src/app/services/forgot-password.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  credentials = {
    username: '',
    password: '',
    password1: ''
  }

  users !: Array<User>;

  constructor(private forgotPasswordService: ForgotPasswordService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  getUser() {
    this.forgotPasswordService.getUsers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: any) {
    this.users = response;
  }

  onSubmit() {
    if ((this.credentials.username != '' && this.credentials.password != '' && this.credentials.password1 != '') && (this.credentials.username != null && this.credentials.password != null && this.credentials.password1 != null))
    {
      if((this.credentials.password == this.credentials.password1)){
      console.log("We have update password here!");
      this.forgotPasswordService.updateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log("response");
          this.forgotPasswordService.getUsers();
          this.snack.open('Password Updated Successfully!!!' , 'OK',{
            duration: 3000,
            verticalPosition:'top',
          })
          window.location.href="/login";
        },
        (error:any)=>{
          console.log("error");
          this.snack.open('Something Went Wrong!!!' , 'OK',{
            duration: 3000,
            verticalPosition:'top',
          })
        }
      )
    }
    else{
      this.snack.open('New Password and Confirmed Password not Macthes !!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
    }
    } else {
      console.log("Fields are required!");
      this.snack.open('Fields are required !!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
    }

  }

}
