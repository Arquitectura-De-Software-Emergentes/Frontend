import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApplicantRegister, AuthService, CV, User } from '../../services/auth.service';

@Component({
  selector: 'app-register-applicant',
  templateUrl: './register-applicant.component.html',
  styleUrls: ['./register-applicant.component.css']
})
export class RegisterApplicantComponent {
  username: string='';
  password: string='';
  cv: string='';
  role: string='APPLICANT';

  constructor(private router: Router, private authService: AuthService){}

  submit() {
    
  }

  register(){
    let ccv: CV={
      cv: this.cv
    }
    let aux: ApplicantRegister={
      username: this.username,
      password: this.password,
      cv: ccv,
      role: this.role
    }
    
    let user: User={
      username: this.username,
      password: this.password,
    }
    this.authService.registerApplicant(aux).subscribe(
      resp=>{
        console.log(resp);
        this.authService.login(user).subscribe(r=>{
          this.authService.setUser(r);
            if(r.user.role=='APPLICANT')this.router.navigate([`iam/professional-profile`])
        })
      }
    )
  }
}
