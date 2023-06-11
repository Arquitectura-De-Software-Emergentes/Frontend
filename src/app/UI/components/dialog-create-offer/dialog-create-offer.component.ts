import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { UiModule } from '../../ui.module';

@Component({
  selector: 'app-dialog-create-offer',
  templateUrl: './dialog-create-offer.component.html',
  styleUrls: ['./dialog-create-offer.component.css'],
  standalone: true,
  imports: [UiModule,MatFormFieldModule, MatInputModule,FormsModule, MatSelectModule],
})
export class DialogCreateOfferComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<DialogComponentComponent>,private snackBar: MatSnackBar) {}
  

  user = {
    name: '',
    email: '',
    password: ''
  };

  onSubmit():void{

  }
}
