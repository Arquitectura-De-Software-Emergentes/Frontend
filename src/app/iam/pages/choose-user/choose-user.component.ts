import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-choose-user',
  templateUrl: './choose-user.component.html',
  styleUrls: ['./choose-user.component.css']
})
export class ChooseUserComponent {
 constructor(private router: Router){}
 goApplicantRegiter(){
  this.router.navigate([`register/applicant`])
 }
 goRecruiterRegiter(){
  this.router.navigate([`register/recruiter`])
 }
}
