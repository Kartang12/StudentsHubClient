import { Injectable } from '@angular/core';
import { Port } from '../_Models/Port';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  port:Port = new Port();
  private _getAllRolesUrl = "https://localhost:"+this.port.port+"/api/v1/groups"

  constructor(private http: HttpClient) {  }

  getGroups(){
    return this.http.get<any>(this._getAllRolesUrl)
  }

}
