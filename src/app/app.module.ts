/* Imports */
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LOCALE_ID, NgModule } from '@angular/core';

/* Components */
import { AppComponent } from './app.component';

/* Modules */
import { PagesModule } from 'src/app/pages/pages.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PagesModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [MaterialModule],
  providers:  [
    {
      provide: LOCALE_ID,
      useValue: "pt"
    },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
