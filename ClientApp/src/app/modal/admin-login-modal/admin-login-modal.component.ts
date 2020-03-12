import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-login-modal',
  templateUrl: './admin-login-modal.component.html',
  styleUrls: ['./admin-login-modal.component.scss']
})
export class AdminLoginModalComponent implements OnInit {

  public closeModalImagePath = "../../../assets/img/icon_close-modal.png";

  constructor(
    public dialogRef: MatDialogRef<AdminLoginModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }
  ngOnInit(): void {
  }

  //close the modal
  closeModal() {
    this.dialogRef.close();
  }
}
