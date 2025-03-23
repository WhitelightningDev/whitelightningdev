import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from '../../material/material.module';
import { ContactDialogComponent } from '../../components/dialog/contact-dialog/contact-dialog.component';

@Component({
  selector: 'app-home',
  imports: [MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}

  openContactDialog(): void {
    this.dialog.open(ContactDialogComponent, {
      width: '350px',
    });
  }
}
