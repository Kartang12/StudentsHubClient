import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {HttpResponseBase, HttpErrorResponse} from '@angular/common/http'
import { CreateUserRequest } from 'src/app/_Models/Requests/CreateUserRequest';
import { AuthService } from 'src/app/_Services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService, private router:Router) { }

  ngOnInit() {
  }

  errorsPresent:boolean = false;
  errors: HttpErrorResponse;
  newUser: CreateUserRequest = new CreateUserRequest();

  registerUser() {
    // this.newUser.Role = "User"
    // this._auth.registerUser(this.)
    // .subscribe(
    //   res =>{ 
    //     localStorage.setItem('name', res.email)
    //     localStorage.setItem('role', 'User')
    //     this.router.navigate(['/Posts/posts'])
    //   },
    //   err => {
    //     this.errors = <HttpErrorResponse>err.error.errors
    //     this.errorsPresent = true
    //   }
    // )
  }

}

