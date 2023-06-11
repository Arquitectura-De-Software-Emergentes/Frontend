import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JobOffer } from 'src/app/assessment/models/jobOffer';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  readonly apiUrl: string = 'http://ec2-3-95-18-5.compute-1.amazonaws.com:8080/job-offers/'
  constructor(private http:HttpClient) { }

  getJobOffers():Observable<JobOffer[]>{
    return this.http.get<JobOffer[]>(this.apiUrl);
  }

  getJobOffersByIdRecruiter(id: number):Observable<JobOffer[]> {
    let url= this.apiUrl+`/recruiter/${id}`
    return this.http.get<JobOffer[]>(url);
  }
  applyToJobOffer(jobOfferId:number,applicantId:number):Observable<string>{
    console.log("jobOfferId es",jobOfferId);
    console.log("ApplicantId es", applicantId);
    console.log("url xd",this.apiUrl+`${jobOfferId}/`+ "apply/"+`${applicantId}`)
    console.log("Respuesta",this.http.post<string>(this.apiUrl+`${jobOfferId}/`+ "/apply/"+`${applicantId}`,null));
    return this.http.post<string>(this.apiUrl+`${jobOfferId}/`+ "apply/"+`${applicantId}`,null);
  }

 
}
