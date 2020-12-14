import { Injectable } from '@angular/core';
import { Port } from '../_Models/Port';
import { HttpClient } from '@angular/common/http';
import { ExcersiseAnswerRequest } from '../_Models/Requests/ExcersiseAnswerRequest';
import { CreateExcersiseRequest } from '../_Models/Requests/CreateExcersiseRequest';

@Injectable({
  providedIn: 'root'
})
export class ExcersiseService {

  port:Port = new Port();
  private _getExcesisesBySubject = "https://localhost:"+this.port.port+"/api/v1/excersises"
  private _getExcesisesById = "https://localhost:"+this.port.port+"/api/v1/exercise"
  private _saveExcesise = "https://localhost:"+this.port.port+"/api/v1/excersises/save"
  private _updateExcersise = "https://localhost:"+this.port.port+"/api/v1/exercises/"
  private _deleteExcersise = "https://localhost:"+this.port.port+"/api/v1/exercise/"
  private _createExcersise = "https://localhost:"+this.port.port+"/api/v1/exercise"
  private _getMarks = "https://localhost:"+this.port.port+"/api/v1/marks/"

  constructor(private http: HttpClient) { }

  GetExcesisesBySubject(subName:string){
    // console.log(subName)
    return this.http.get<any>(this._getExcesisesBySubject+"/"+subName)
  }

  GetExcesisesById(exId:string){
    // console.log(exId)
    return this.http.get<any>(this._getExcesisesById+"/"+exId)
  }

  SaveAnswer(ex:ExcersiseAnswerRequest){
    // console.log(ex)
    return this.http.post(this._saveExcesise, ex)
  }

  UpdateExercise(taskId:string, ex:CreateExcersiseRequest){
    // console.log(ex)
    return this.http.put(this._updateExcersise+taskId, ex)
  }

  DeleteExercise(taskId:string){
    // console.log(ex)
    return this.http.delete(this._deleteExcersise+taskId)
  }

  CreateExercise(ex:CreateExcersiseRequest){
    return this.http.post(this._createExcersise, ex)
  }

  GetMarks(){
    return this.http.get<any>(this._getMarks+localStorage.getItem('id'))
  }

}
