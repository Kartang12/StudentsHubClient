import { Injectable } from '@angular/core';
import { Port } from '../_Models/Port';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../_Models/Subject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  port:Port = new Port();
  private _getExcesisesBySubject = "https://localhost:"+this.port.port+"/api/v1/subjectsByUserId/"

  constructor(private http: HttpClient) { }

  GetSubjectsBuUserId(userId:string){
    return this.http.get<any>(this._getExcesisesBySubject+userId)
  }

}
