import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MaterialModule } from '../../../material/material.module';

@Component({
  selector: 'app-contact-dialog',
  imports: [MaterialModule],
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent {
  constructor(public dialogRef: MatDialogRef<ContactDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
