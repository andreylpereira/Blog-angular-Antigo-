import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../../services/auth-guard/auth-guard.service';

/* Components */
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { EditArticleComponent } from 'src/app/pages/admin/article/edit-article/edit-article.component';
import { FormArticleComponent } from 'src/app/pages/admin/article/form-article/form-article.component';
import { LoginComponent } from 'src/app/pages/admin/login/login.component';
import { RegisterComponent } from 'src/app/pages/admin/register/register.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { FormCategoryComponent } from 'src/app/pages/admin/category/form-category/form-category.component';
import { EditCategoryComponent } from 'src/app/pages/admin/category/edit-category/edit-category.component';
import { ListCategoriesComponent } from 'src/app/pages/admin/category/list-categories/list-categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'panel-control', component: AdminComponent },
  {
    path: 'panel-control/category',
    component: ListCategoriesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'panel-control/category/new',
    component: FormCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'panel-control/category/:id/edit',
    component: EditCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'panel-control/article',
    children: [
      {
        path: 'new',
        component: FormArticleComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/edit',
        component: EditArticleComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
