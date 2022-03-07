import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService as AuthGuard } from '../../services/auth-guard/auth-guard.service';

/* Components */
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { EditArticleComponent } from 'src/app/pages/admin/edit-article/edit-article.component';
import { FormArticleComponent } from 'src/app/pages/admin/form-article/form-article.component';
import { LoginComponent } from 'src/app/pages/admin/login/login.component';
import { RegisterComponent } from 'src/app/pages/admin/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/panel-control', pathMatch: 'full' },
  { path: 'panel-control', component: AdminComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article/new', component: FormArticleComponent, canActivate: [AuthGuard], },
  { path: 'article/edit', component: EditArticleComponent, canActivate: [AuthGuard], },
  { path: '**', component: AdminComponent, },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
