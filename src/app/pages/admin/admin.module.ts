import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { AdminRoutingModule } from 'src/app/pages/admin/admin-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormArticleComponent } from './form-article/form-article.component';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ AdminComponent, RegisterComponent, LoginComponent, FormArticleComponent, EditArticleComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
