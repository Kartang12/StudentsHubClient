import { Injectable } from '@angular/core';
import { Port } from '../_Models/Port';
import { HttpClient } from '@angular/common/http';
import { ExcersiseAnswerRequest } from '../_Models/Requests/ExcersiseAnswerRequest';
import { CreateExcersiseRequest } from '../_Models/Requests/CreateExcersiseRequest';
import { CheckExRequest } from '../_Models/Requests/CheckExRequest';
import { UpdateExRequest } from '../_Models/Requests/UpdateExRequest';

@Injectable({
  providedIn: 'root'
})
export class ExcersiseService {

  port:Port = new Port();
  private _getExcesisesBySubject = "https://localhost:"+this.port.port+"/api/v1/excersises"
  private _getExcesisesById = "https://localhost:"+this.port.port+"/api/v1/exercise"
  private _saveExcesise = "https://localhost:"+this.port.port+"/api/v1/exercise/save"
  private _updateExcersise = "https://localhost:"+this.port.port+"/api/v1/exercise"
  private _deleteExcersise = "https://localhost:"+this.port.port+"/api/v1/exercise/"
  private _createExcersise = "https://localhost:"+this.port.port+"/api/v1/exercise"
  private _checkExcersise = "https://localhost:"+this.port.port+"/api/v1/checkExercise"
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

  UpdateExercise(ex:UpdateExRequest){
    console.log(ex)
    return this.http.put(this._updateExcersise, ex)
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

  CheckExercise(req:CheckExRequest){
    return this.http.post<any>(this._checkExcersise, req)
  }

}
