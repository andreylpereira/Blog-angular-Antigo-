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
import { FormArticleComponent } from './article/form-article/form-article.component';
import { EditArticleComponent } from './article/edit-article/edit-article.component';
import { FormCategoryComponent } from './category/form-category/form-category.component';
import { ListCategoriesComponent } from './category/list-categories/list-categories.component';
import { ListArticlesComponent } from './article/list-articles/list-articles.component';
import { EditCategoryComponent } from './category/edit-category/edit-category.component';
import { PreviewArticleComponent } from './article/preview-article/preview-article.component';

@NgModule({
  declarations: [ AdminComponent, RegisterComponent, LoginComponent, FormArticleComponent, EditArticleComponent, FormCategoryComponent, ListCategoriesComponent, ListArticlesComponent, EditCategoryComponent, PreviewArticleComponent ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ]
})
export class AdminModule { }
