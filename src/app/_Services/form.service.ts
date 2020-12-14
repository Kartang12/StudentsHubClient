import { Injectable } from '@angular/core';
import { Port } from '../_Models/Port';
import { HttpClient } from '@angular/common/http';
import { FormRequest } from '../_Models/Requests/FormRequest';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  port:Port = new Port();
  private _getAllFormsUrl = "https://localhost:"+this.port.port+"/api/v1/forms"
  private _addForm = "https://localhost:"+this.port.port+"/api/v1/form"
  private _deleteForm = "https://localhost:"+this.port.port+"/api/v1/form/"

  constructor(private http: HttpClient) {  }

  getForms(){
    return this.http.get<any>(this._getAllFormsUrl)
  }

  addForm(form:FormRequest){
    return this.http.post<any>(this._addForm, form)
  }

  deleteForm(id:string){
    return this.http.delete<any>(this._deleteForm+id)
  }

}
