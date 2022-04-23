import { Component, OnInit } from '@angular/core';
import { Admin } from "src/app/components/admin/model/admin";
import { AdminForgotService } from "src/app/components/admin/services/admin-forgot.service";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin-forgot',
  templateUrl: './admin-forgot.component.html',
  styleUrls: ['./admin-forgot.component.css']
})
export class AdminForgotComponent implements OnInit {

  credentials = {
    username: '',
    password: '',
    password1: ''
  }

  users !: Array<Admin>;

  constructor(private adminForgotService : AdminForgotService, private snack: MatSnackBar) { }

  ngOnInit(): void {
  }

  getAdmin() {
    this.adminForgotService.getAdmins().subscribe(
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
      this.adminForgotService.updateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log("response");
          this.adminForgotService.getAdmins();
          this.snack.open('Password Updated Successfully!!!' , 'OK',{
            duration: 3000,
            verticalPosition:'top',
          })
          window.location.href="/admin-login";
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
    else {
      this.snack.open('New Password and Confirmed Password Not Matches !!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
    }
    } else {
      console.log("Fields are required!");
      this.snack.open('Fields are required!!!' , 'OK',{
        duration: 3000,
        verticalPosition:'top',
      })
    }

  }

}
