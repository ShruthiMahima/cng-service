import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DetailsModalComponent } from './modal/details-modal/details-modal.component';
import { CertificateService } from './../services/certificate.service';


@Component({
  selector: 'app-certification-scheme',
  templateUrl: './certification-scheme.component.html',
  styleUrls: ['./certification-scheme.component.scss']
})
export class CertificationSchemeComponent implements OnInit {

  public certificationSchemes: any = [];
  public filter:any = {};
  public static response = {
    "apiversion": "5.6",
    "code": 200,
    "status": "OK",
    "message": "OK",
    "data": {
      "scheme": [
        {
          "name": "Canada Safety Scheme",
          "description": "Canada Safety Scheme (traditionally known as the cUL Mark Program) operated by the UL L...",
          "certificateNumber": "50043",
          "prefix": "UL-CA-19",
          "suffix": ""
        },
        {
          "name": "CB Certification",
          "description": "CB Test Certificate",
          "certificateNumber": "000033",
          "prefix": "US-",
          "suffix": "-UL"
        },
        {
          "name": "Energy Efficiency - UL VS",
          "description": "Energy Efficiency Scheme - covers EPA Energy Star, DOE, NRCAN, CEC, and Other",
          "certificateNumber": "000012xA",
          "prefix": "UL-EE-",
          "suffix": ""

        }
      ]
    }
  };
  activePage: number = 0;
  public storedData = [];
  static currentScope;

  constructor(public matDialog: MatDialog, private certificateService: CertificateService) {
    this.filter.certificationScheme = "";
    this.filter.pageNo = 1;
    this.filter.pageSize = 5;
    CertificationSchemeComponent.currentScope = this;
  }

  ngOnInit(): void {
    this.populateCertificates();
    //this.certificationSchemes = CertificationSchemeComponent.response.data.scheme;
  }

  //Fetch Certificates
  populateCertificates() {
    this.certificateService.getCertificates(this.filter)
      .subscribe(data => {
        this.certificationSchemes = data;
        this.storeData();
      });
}
        

  searchCertificationScheme() {
    this.filter.pageNo = 1;
    this.storedData = [];
    this.populateCertificates();
  }

  displayActivePage(activePageNumber: number) {
    this.activePage = activePageNumber;
    this.filter.pageNo =  Number(this.activePage);
    _.find(this.storedData, function (item) {
      if (item.pageNo != CertificationSchemeComponent.currentScope.filter.pageNo) {
        CertificationSchemeComponent.currentScope.populateCertificates();
      }
    });
  }

  storeData() {
    if (this.storedData.length == 0) {
      let scheme = {
        pageNo: this.filter.pageNo,
        data: this.certificationSchemes
      };
      this.storedData.push(scheme);
    }
    else {
      _.find(this.storedData, function (item) {
        if (item.pageNo != CertificationSchemeComponent.currentScope.filter.pageNo) {
          let scheme = {
            pageNo: CertificationSchemeComponent.currentScope.filter.pageNo,
            data: CertificationSchemeComponent.currentScope.certificationSchemes
          };
          CertificationSchemeComponent.currentScope.storedData.push(scheme);
        }
      });
    }
  }

  //Generate new certificate number
  generateNumber(scheme) {
    alert("In progress");
  }



  openModal(scheme) {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    //dialogConfig.height = "45%";
    dialogConfig.width = "65%";
    dialogConfig.data = scheme;
    const modalDialog = this.matDialog.open(DetailsModalComponent, dialogConfig);
  }

}
