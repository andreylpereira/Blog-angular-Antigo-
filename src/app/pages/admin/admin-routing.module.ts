import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { AdminComponent } from 'src/app/pages/admin/admin.component';
import { EditArticleComponent } from 'src/app/pages/admin/edit-article/edit-article.component';
import { FormArticleComponent } from 'src/app/pages/admin/form-article/form-article.component';
import { LoginComponent } from 'src/app/pages/admin/login/login.component';
import { RegisterComponent } from 'src/app/pages/admin/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/panel-control', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'article/new', component: FormArticleComponent },
  { path: 'article/edit', component: EditArticleComponent },
  { path: '**', component: AdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
