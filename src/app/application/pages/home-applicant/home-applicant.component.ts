import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-home-applicant',
  templateUrl: './home-applicant.component.html',
  styleUrls: ['./home-applicant.component.css'],
  standalone:true,
  imports:[MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, MatIconModule,MatCardModule],
})
export class HomeApplicantComponent {
  value="";
  name="Toshiro";
  userType="Applicant"
}
