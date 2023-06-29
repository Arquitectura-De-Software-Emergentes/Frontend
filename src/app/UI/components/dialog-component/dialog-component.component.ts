import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<DialogComponentComponent>,
  private snackBar: MatSnackBar) {}

  onAceptarClick():void{
    this.dialogRef.close({accepted:true});
    //poner snaCKBAR
  }

  onCancelarClick():void{
    this.dialogRef.close({accepted:false});
  }

}
