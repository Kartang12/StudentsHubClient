import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SubjectService } from 'src/app/_Services/subject.service';
import { FormService } from 'src/app/_Services/form.service';
import { Subject } from 'src/app/_Models/Subject';
import { Form } from 'src/app/_Models/Form';
import { CreateSubjectRequest } from 'src/app/_Models/Requests/CreateSubjectRequest';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  constructor(
    private _subjectService:SubjectService,
    private _formService:FormService,
    private route:ActivatedRoute) 
  { 
    this.routeSubscription = route.params.subscribe(params => this.currentSubject.id = params['id']);
  }
  private routeSubscription: Subscription;

  forms:Form[] = []
  subjects:Subject[] = []
  currentSubject:Subject = new Subject(null,null)
  newSubject:CreateSubjectRequest = new CreateSubjectRequest()

  flag:boolean = false

  ngOnInit(): void {
    if(this.currentSubject.id !== '0')
    {
      this._subjectService.GetSubjectById(this.currentSubject.id)
      .subscribe(res => 
      {
        this.currentSubject = res
        this.flag = true},
        err => console.log(err))
    }
    this.newSubject = new CreateSubjectRequest()
    

    this.getAllForms()
    this.getAllSubjects()
  }

  getAllForms(){
    this._formService.getForms().subscribe(
      res => {
        this.forms = res
        console.log(this.forms)
      },
      err => console.log(err) 
    )
  }

  getAllSubjects(){
    this._subjectService.GetAllSubjects().subscribe(
      res => this.subjects = res,
      err => console.log(err)
    )
  }

  createSubject(request:CreateSubjectRequest){
    this._subjectService.CreateSubject(request).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  updateSubject(id:string){
    this.newSubject.id = id
    console.log(this.newSubject)
    this._subjectService.UpdateSubject(this.newSubject).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteSubject(id:string){
    this._subjectService.DeleteSubject(id).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }
}
