import { MaterialModule } from './../material/material/material.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { HomeComponent } from 'src/app/pages/home/home.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';

/* Modules */
import { SharedModule } from './../shared/shared.module';
import { AdminModule } from 'src/app/pages/admin/admin.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ArticlesSlugComponent } from './categories/articles-slug/articles-slug.component';

@NgModule({
  declarations: [
    HomeComponent,
    CategoriesComponent,
    AboutComponent,
    ArticlesSlugComponent,
  ],
  exports: [
    HomeComponent,
    CategoriesComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule {}
