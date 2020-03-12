import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfig } from './config/config';

import { CertificationSchemeComponent } from './certification-scheme/certification-scheme.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { DetailsModalComponent } from './certification-scheme/modal/details-modal/details-modal.component';
import { AdminLoginModalComponent } from './modal/admin-login-modal/admin-login-modal.component';
import { CertificateService } from './services/certificate.service';
import { AppPaginationComponent } from './app-pagination/app-pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificationSchemeComponent,
    DetailsModalComponent,
    AdminLoginModalComponent,
    AppPaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers: [AppConfig,
    CertificateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
