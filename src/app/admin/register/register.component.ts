import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CreateUserRequest } from 'src/app/_Models/Requests/CreateUserRequest';
import { AuthService } from 'src/app/_Services/auth.service';
import { GroupService } from 'src/app/_Services/group.service';
import { RolesService } from 'src/app/_Services/roles.service';
import { Role } from 'src/app/_Models/Role';
import { Group } from 'src/app/_Models/Group';
import { SubjectService } from 'src/app/_Services/subject.service';
import { Subject } from 'src/app/_Models/Subject';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _groupService:GroupService, 
    private _roleService:RolesService,
    private _subjectService:SubjectService,
    private _authService:AuthService
    ) { }

  ngOnInit():void {
    this.getRoles()
    this.getGroups()
    this.getSubjects()
  }

  roles:Role[]
  groups:Group[]
  subjects:Subject[]
  newUser: CreateUserRequest = new CreateUserRequest()

  registerUser() {
    // console.info(this.subjects)
    this.newUser.subjects = this.subjects.filter(this.isChecked).map(x=> x.name)

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

  getGroups(){
    this._groupService.getGroups().subscribe(
      res => this.groups = res,
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
    if(event.target.checked)
      this.subjects[i].id = '0'
    else
      this.subjects[i].id = '1'
  }

  isChecked(element:Subject, index, array) { 
    return (element.id == '0'); 
  }
}

