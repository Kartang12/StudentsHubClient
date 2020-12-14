import { Injectable } from '@angular/core';
import { Port } from '../_Models/Port';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../_Models/Subject';
import { Observable } from 'rxjs';
import { CreateSubjectRequest } from '../_Models/Requests/CreateSubjectRequest';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  port:Port = new Port();
  private _getSubjectsForTeatcher = "https://localhost:"+this.port.port+"/api/v1/subjectsForTeatcher/"
  private _getSubjectsForStudent = "https://localhost:"+this.port.port+"/api/v1/subjectsForStudent/"
  private _getAllSubjects = "https://localhost:"+this.port.port+"/api/v1/subjects"
  private _getSubjectById = "https://localhost:"+this.port.port+"/api/v1/subject/"
  private _createSubject = "https://localhost:"+this.port.port+"/api/v1/subject"
  private _deleteSubject = "https://localhost:"+this.port.port+"/api/v1/subject/"

  constructor(private http: HttpClient) { }

  SubjectsForTeatcher(userId:string){
    return this.http.get<any>(this._getSubjectsForTeatcher+userId)
  }

  SubjectsForStudent(userId:string){
    return this.http.get<any>(this._getSubjectsForStudent+userId)
  }

  GetAllSubjects(){
    return this.http.get<Subject[]>(this._getAllSubjects)
  }

  GetSubjectById(id:string){
    return this.http.get<Subject>(this._getSubjectById+id)
  }

  CreateSubject(req:CreateSubjectRequest){
    return this.http.post<any>(this._createSubject, req)
  }

  UpdateSubject(req:CreateSubjectRequest){
    return this.http.put<any>(this._createSubject, req)
  }

  DeleteSubject(id:string){
    return this.http.delete<any>(this._deleteSubject + id)
  }

}
