import { Component, OnInit } from '@angular/core';
import { Subject } from '../_Models/Subject';
import { SubjectExcersise } from '../_Models/SubjectExcersise';
import { ExcersiseService } from '../_Services/excersise.service';
import { SubjectService } from '../_Services/subject.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Excersise } from '../_Models/Excersise';

@Component({
  selector: 'app-teatcher',
  templateUrl: './teatcher.component.html',
  styleUrls: ['./teatcher.component.css']
})
export class TeatcherComponent implements OnInit {

  subjects:Subject[]
  subEx:SubjectExcersise[] = []
  flag:boolean = false;

  constructor(
    private exService: ExcersiseService, 
    private subService:SubjectService, 
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getSubjects()
  }


  getExcersises(subject:string): Observable<Excersise[]>{
    return this.exService.GetExcesisesBySubject(subject)
  }

  getSubjects(){
    let id = localStorage.getItem("id")
    this.subService.SubjectsForTeatcher(localStorage.getItem("id")).subscribe(
      res => {
        console.log(res)
        this.subjects = res
        // for (const sub of this.subjects){
        //   this.exService.GetExcesisesBySubject(sub.name).subscribe(
        //     res=>{
        //       let temp = res
        //       this.subEx.push(new SubjectExcersise(sub, temp))
        //       console.log(this.subEx)
        //     }
        //   )
        // }
      },
    )
  }

}
