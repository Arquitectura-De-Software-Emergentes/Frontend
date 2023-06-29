import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private infoSesion?:InfoSession;

  readonly apiUrl: string = 'https://teacher-finder.up.railway.app/api/v1/' + 'auth/';
  constructor(private http: HttpClient) {}

  registerRecruiter(recruiter: RecruiterRegister){
    let url= this.apiUrl+`recruiters/register`
    return this.http.post<number>(url, recruiter);
  }

  registerApplicant(applicant: ApplicantRegister){
    let url= this.apiUrl+`applicants/register`
    return this.http.post<number>(url, applicant);
  }

  login(user: User){
    let url= this.apiUrl+`auth/login`
    return this.http.post<InfoSession>(url, user);
  }

  public get idUser(): number  {
    return this.infoSesion!.user.userId
  }

  public get infoUser(): InfoSession  {
    return this.infoSesion!
  }

  public setUser(session: InfoSession):void{
    this.infoSesion=session;
  }
}

export interface User{
  username: string,
  password: string
}

export interface InfoSession{
  token: string,
  user: UserInfoSession
}

export interface UserInfoSession{
  role: string,
  userId: number,
  username: string
}

export interface RecruiterRegister{
  username: string,
  password: string,
  position: string,
  role: string
}

export interface ApplicantRegister{
  username: string,
    password: string,
    cv: CV,
    role: string
}

export interface CV{
  cv: string
}