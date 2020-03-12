import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AdminLoginModalComponent } from './modal/admin-login-modal/admin-login-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public matDialog: MatDialog) { }
  title = 'Certificate Number Generator';

  openAdminLoginModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "auto";
    dialogConfig.width = "65%";
    const modalDialog = this.matDialog.open(AdminLoginModalComponent, dialogConfig);
  }
}
