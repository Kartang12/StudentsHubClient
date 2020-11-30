import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExcersiseService } from 'src/app/_Services/excersise.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Excersise } from 'src/app/_Models/Excersise';

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
    ex:Excersise
    

  ngOnInit(): void {
    this.exService.GetExcesisesById(this.taskId).subscribe(res=> 
      this.ex = res),
      err=> console.log(err)
  }

  confirmAnswer(){
    console.log("test")
    
  }

}
