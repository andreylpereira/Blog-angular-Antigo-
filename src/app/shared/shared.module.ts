import { AdminRoutingModule } from './../pages/admin/admin-routing.module';
import { MaterialModule } from './../material/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent,
    ButtonComponent
  ],
  exports: [
    HeaderComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class SharedModule { }
