import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcersiseService } from 'src/app/_Services/excersise.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Excersise } from 'src/app/_Models/Excersise';
import { CreateExcersiseRequest } from 'src/app/_Models/Requests/CreateExcersiseRequest';

@Component({
  selector: 'app-task',
  templateUrl: './teatcher-task.component.html',
  styleUrls: ['./teatcher-task.component.css']
})
export class TeatcherTaskComponent implements OnInit {

  private routeSubscription: Subscription;
  constructor(private exService: ExcersiseService, private _router: Router, private route:ActivatedRoute) { 
    this.routeSubscription = route.params.subscribe(params => this.taskId = params['id']);
  }
  
    taskId:string
    ex:Excersise = new Excersise()
    newEx:CreateExcersiseRequest = new CreateExcersiseRequest()
    flag:boolean = false

  checkId(){
    if(this.taskId == '0'){
      this.flag = false;
    }
    else 
    this.flag = true;
  }


  ngOnInit(): void {
    this.exService.GetExcesisesById(this.taskId).subscribe(res=> 
      this.ex = res),
      err=> console.log(err)
      this.checkId()
  }

  saveTask(){
    this.exService.UpdateExercise(this.taskId, this.newEx).subscribe()
  }

  deleteTask(){
    this.exService.DeleteExercise(this.taskId).subscribe()
  }

  createTask(){
    console.log(this.newEx)
    this.exService.CreateExercise(this.newEx).subscribe()
  }

}
