import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcersiseService } from 'src/app/_Services/excersise.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Excersise } from 'src/app/_Models/Excersise';
import { ExcersiseAnswerRequest } from 'src/app/_Models/Requests/ExcersiseAnswerRequest';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  private routeSubscription: Subscription;
  constructor(private exService: ExcersiseService, private _router: Router, private route:ActivatedRoute) { 
    this.routeSubscription = route.params.subscribe(params => this.taskId = params['id']);
  }
  
    loaded:boolean = false

    taskId:string
    ex:Excersise
    answer:string
  ngOnInit(): void {
    this.exService.GetExcesisesById(this.taskId).subscribe(res=> 
      {this.ex = res,
      this.loaded = true},
      err=> console.log(err)
      )
    }

  getVal(val){
    this.answer=val;
    console.info(this.answer)
  }

  confirmAnswer(){
    console.log("test")
    let ex = new ExcersiseAnswerRequest(
      localStorage.getItem('id'),
      this.taskId,
      this.answer
    )
    this.exService.SaveAnswer(ex).subscribe(res=> 
      console.log(res),
      err => console.log(err))
  }
}
