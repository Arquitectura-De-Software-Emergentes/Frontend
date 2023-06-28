import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstitutionalProfileResponse } from '../models/recruiterprofileResponse';

@Injectable({
  providedIn: 'root'
})
export class RecruiterProfileService {

  readonly apiUrl: string = 'http://ec2-3-95-18-5.compute-1.amazonaws.com:8080/api/v1/' + 'recruiters/';
  constructor(private http: HttpClient) {}

  getProfile(id:number):Observable<InstitutionalProfileResponse>{
    let url=this.apiUrl+`${id}/profiles`
    return this.http.get<InstitutionalProfileResponse>(url);
  }
}
