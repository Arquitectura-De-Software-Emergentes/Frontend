import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-applicant',
  templateUrl: './register-applicant.component.html',
  styleUrls: ['./register-applicant.component.css']
})
export class RegisterApplicantComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('',Validators.required),
    cv: new FormControl('')
  });

  constructor(private router: Router){}

  submit() {
    if (this.form.valid) {
    }
  }

  goHome(){
    this.router.navigate(['applicant/'])
  }
}
