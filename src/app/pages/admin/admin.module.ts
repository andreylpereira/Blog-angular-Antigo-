/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from 'src/app/pages/admin/admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../../material/material/material.module';
import { SharedModule } from './../../shared/shared.module';

/* Components */
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormArticleComponent } from './form-article/form-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [ AdminComponent, RegisterComponent, LoginComponent, FormArticleComponent, EditArticleComponent, CategoryComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class AdminModule { }
