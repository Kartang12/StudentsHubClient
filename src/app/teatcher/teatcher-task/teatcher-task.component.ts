import { Component, OnInit, Input } from '@angular/core';
import { ExcersiseService } from 'src/app/_Services/excersise.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Excersise } from 'src/app/_Models/Excersise';
import { CreateExcersiseRequest } from 'src/app/_Models/Requests/CreateExcersiseRequest';
import { Subject } from 'src/app/_Models/Subject';
import { SubjectService } from 'src/app/_Services/subject.service';
import { UpdateExRequest } from 'src/app/_Models/Requests/UpdateExRequest';

@Component({
  selector: 'app-teatcher-task',
  templateUrl: './teatcher-task.component.html',
  styleUrls: ['./teatcher-task.component.css']
})
export class TeatcherTaskComponent implements OnInit {

  constructor(
    private exService: ExcersiseService, 
    private subService:SubjectService,
    private router: Router) 
    {
      // if(this.router.url.split('/')[3] != '0')  
      //   if(this.taskId != this.router.url.split('/')[3])
          this.taskId = this.router.url.split('/')[3]
          // window.location.reload(); 
    }
    
    updateEx:UpdateExRequest = new UpdateExRequest()
    subjects:Subject[] = []
    taskId:string = ''
    ex:Excersise = new Excersise()
    newEx:CreateExcersiseRequest = new CreateExcersiseRequest()
    flag:boolean = false

  checkId(){
    if(this.taskId == '0')
      this.flag = false;
    else 
      this.flag = true;
  }

  ngOnInit(): void {
    this.getSubjects()
    this.checkId()
    if(this.flag)
      this.exService.GetExcesisesById(this.taskId).subscribe(
        res=> this.ex = res),
        err=> console.log(err)
    
  }

  saveTask(){
    this.updateEx.Id = this.taskId
    this.updateEx.Title = this.newEx.title
    this.updateEx.Content = this.newEx.content
    this.updateEx.CorrectAnswer = this.newEx.correctAnswer
    console.log(this.updateEx)
    this.exService.UpdateExercise(this.updateEx).subscribe(
      res => {
        console.log(res)
        window.location.reload()
      },
      err => console.log(err)
    )
  }

  deleteTask(){
    this.exService.DeleteExercise(this.taskId).subscribe()
    window.location.reload()
  }

  createTask(){
    console.log(this.newEx)
    this.exService.CreateExercise(this.newEx).subscribe(
      res => {
        console.log(res)
        window.location.reload();
      },
      err => console.log(err)
    )
    
  }

  getSubjects(){
    let id = localStorage.getItem("id")
    this.subService.SubjectsForTeatcher(localStorage.getItem("id")).subscribe(
      res => {
        this.subjects = res
      },
      err => console.log(err)
    )
  }
}
