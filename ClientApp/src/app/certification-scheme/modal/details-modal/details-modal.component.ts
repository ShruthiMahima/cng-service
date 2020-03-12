import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-details-modal',
  templateUrl: './details-modal.component.html',
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent implements OnInit {

  public scheme;
  public closeModalImagePath = "../../../../assets/img/icon_close-modal.png";

  constructor(
    public dialogRef: MatDialogRef<DetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.scheme = data;
  }
  ngOnInit(): void {
  }

  //close the modal
  closeModal() {
    this.dialogRef.close();
  }
}
