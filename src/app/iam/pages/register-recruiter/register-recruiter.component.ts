import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-register-recruiter',
  templateUrl: './register-recruiter.component.html',
  styleUrls: ['./register-recruiter.component.css']
})
export class RegisterRecruiterComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    position: new FormControl(''),
    role: new FormControl('RECRUITER')
  });
  constructor(private router: Router, private authService: AuthService){}
  goHome(){
    //this.router.navigate(['login'])
  }

  register(){
    let user: User={
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
    }
    this.authService.registerRecruiter(this.form.getRawValue()).subscribe(
      resp=>{
        console.log(resp);
        this.authService.login(user).subscribe(r=>{
          this.authService.setUser(r);
            if(r.user.role=='RECRUITER') this.router.navigate([`iam/recruiter-profile`])
        })
      }
    )
  }
}
