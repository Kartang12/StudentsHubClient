import { Injectable } from '@angular/core';
import { Port } from '../_Models/Port';
import { HttpClient } from '@angular/common/http';
import { Excersise } from '../_Models/Excersise';
import { Observable } from 'rxjs';
import { ExcersiseAnswerRequest } from '../_Models/Requests/ExcersiseAnswerRequest';

@Injectable({
  providedIn: 'root'
})
export class ExcersiseService {

  port:Port = new Port();
  private _getExcesisesBySubject = "https://localhost:"+this.port.port+"/api/v1/excersises"
  private _getExcesisesById = "https://localhost:"+this.port.port+"/api/v1/excersise"
  private _saveExcesise = "https://localhost:"+this.port.port+"/api/v1/excersises/save"

  constructor(private http: HttpClient) { }

  GetExcesisesBySubject(subName:string){
    console.log(subName)
    return this.http.get<any>(this._getExcesisesBySubject+"/"+subName)
  }

  GetExcesisesById(exId:string){
    console.log(exId)
    return this.http.get<any>(this._getExcesisesById+"/"+exId)
  }

  SaveAnswer(ex:ExcersiseAnswerRequest){
    console.log(ex)
    return this.http.post(this._saveExcesise, ex)
  }

}
