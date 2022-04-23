import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public loggedIn= false;

  constructor(private loginService: LoginService,public router:Router) { }

  ngOnInit(): void {
    this.loggedIn = this.loginService.isLogedIn();
    console.log(this.loggedIn);
  }

  logoutUser(){
    this.loginService.logout();
    location.reload();
    window.location.href="/"
  }

}
