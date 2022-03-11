import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Components */
import { AboutComponent } from 'src/app/pages/about/about.component';
import { ArticlesSlugComponent } from 'src/app/pages/categories/articles-slug/articles-slug.component';
import { CategoriesComponent } from 'src/app/pages/categories/categories.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:slug', component: ArticlesSlugComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', loadChildren: () => import('./pages/admin/admin.module').then(a => a.AdminModule)},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
