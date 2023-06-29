import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstitutionalProfileResponse } from '../models/recruiterprofileResponse';

@Injectable({
  providedIn: 'root'
})
export class RecruiterProfileService {

  readonly apiUrl: string = 'https://teacher-finder.up.railway.app/api/v1/recruiters/%7BrecruiterId%7D/profiles?recruiterId=11';
  constructor(private http: HttpClient) {}

  getProfile(id:number):Observable<InstitutionalProfileResponse>{
    let url=this.apiUrl
    return this.http.get<InstitutionalProfileResponse>(url);
  }
}
