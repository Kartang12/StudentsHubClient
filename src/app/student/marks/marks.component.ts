import { Component, OnInit } from '@angular/core';
import { ExcersiseService } from 'src/app/_Services/excersise.service';
import { StudentExcersise } from 'src/app/_Models/StudentExercise';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent implements OnInit {

  constructor(private _exService: ExcersiseService) { }

  marks:StudentExcersise[]

  ngOnInit(): void {
    this._exService.GetMarks().subscribe(
      res=>
      {
        this.marks = res
        console.log(this.marks)
      },
      err => console.log(err)
      )
  }

}
