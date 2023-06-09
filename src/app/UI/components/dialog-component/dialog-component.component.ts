import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private dialogRef: MatDialogRef<DialogComponentComponent>) {}

  onAceptarClick():void{
    this.dialogRef.close({accepted:true});
  }

  onCancelarClick():void{
    this.dialogRef.close({accepted:false});
  }

}
