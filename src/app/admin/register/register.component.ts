import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';

import { CreateUserRequest } from 'src/app/_Models/Requests/CreateUserRequest';
import { AuthService } from 'src/app/_Services/auth.service';
import { FormService } from 'src/app/_Services/form.service';
import { RolesService } from 'src/app/_Services/roles.service';
import { Role } from 'src/app/_Models/Role';
import { Form } from 'src/app/_Models/Form';
import { SubjectService } from 'src/app/_Services/subject.service';
import { Subject } from 'src/app/_Models/Subject';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _formService:FormService, 
    private _roleService:RolesService,
    private _subjectService:SubjectService,
    private _authService:AuthService
    ) { }

  ngOnInit():void {
    this.getRoles()
    this.getForms()
    this.getSubjects()
  }

  test:boolean= false
  roles:Role[]
  forms:Form[]
  subjects:Subject[]
  newUser: CreateUserRequest = new CreateUserRequest()
  indexes:number[] = []


  registerUser() {
    this.newUser.SubjectIds = []
    this.indexes.forEach(i => {
      this.newUser.SubjectIds.push(this.subjects[i].id)
    });
    console.log(this.newUser)
    this._authService.registerUser(this.newUser)
    .subscribe(
      res => console.info(res),
      err => {
        console.warn(err)
      }
    )
  }

  getRoles(){
    this._roleService.getAllRoles().subscribe(
      res => this.roles = res,
      err => console.warn(err)
    )
  }

  getForms(){
    this._formService.getForms().subscribe(
      res =>{ this.forms = res
      console.log(this.forms)
      },
      err => console.warn(err)
    )
  }

  getSubjects(){
    this._subjectService.GetAllSubjects().subscribe(
      res => this.subjects = res,
      err => console.warn(err)
    )
  }

  updateCheckedOptions(i, event) {
    if(event.target.checked){
      this.indexes.push(i)
      console.log(this.indexes)
    }
    else
    {
      let index = this.indexes.findIndex(x => x == i); //find index in your array
      this.indexes.splice(index, 1);//remove element from array
      console.log(this.indexes)
    }
  }

  isChecked(element:Subject, index, array) { 
    return (element.id == '0'); 
  }
}