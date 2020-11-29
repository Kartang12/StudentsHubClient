import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_Services/auth.service';
import { Router } from '@angular/router';
import { AuthSuccessResponse } from '../_Models/Responses/AuthSuccessResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  route:String = "/login"
  loginUserData = {
    email: "",
    password: ""
  }
  user: AuthSuccessResponse = null;
  constructor(private _auth: AuthService, private router:Router){}

  ngOnInit() {
  }

  loginUser() {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        // this.user = JSON.parse(JSON.stringify(res))
        console.log(res.roles)
        localStorage.setItem('id', res.id)
        localStorage.setItem('name', res.name)
        localStorage.setItem('email', res.email)
        localStorage.setItem('role', res.roles[0])
        if(localStorage.getItem('role') == "User")
          this.route = "/student/"
        if(localStorage.getItem('role') == "Admin")
          this.route = "/admin/"
        this.router.navigate([this.route])
      },
      err => console.log(err)
    )
  }
}
