import { Component, OnInit } from '@angular/core';
import { Form } from '../../_Models/Form';
import { FormService } from 'src/app/_Services/form.service';
import { FormRequest } from 'src/app/_Models/Requests/FormRequest';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private _formService:FormService) { }

  newForm:FormRequest = new FormRequest()
  forms:Form[]

  ngOnInit(): void {
    this.getAllForms()
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

  addForm(){
    console.log(this.newForm)
    if(this.newForm.number)
    this._formService.addForm(this.newForm).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

  deleteTag(id:string){
    this._formService.deleteForm(id).subscribe(
      res => console.log(res),
      err => console.log(err)
    )
  }

}
