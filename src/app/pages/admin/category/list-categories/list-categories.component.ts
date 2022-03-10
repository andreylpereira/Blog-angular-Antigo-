import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Categories from 'src/app/models/categories/categories.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  public listCategories: Categories[] = [];

  constructor(private categoriesService: CategoriesService, private router: Router) {}

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((data: any) => (this.listCategories = data));
  }

  public edit(id: number) {
    this.router.navigate([`admin/panel-control/category/${id}/edit`])
  }

  public deleteCategory(id: number) {
    this.categoriesService.deleteCategory(id).subscribe();
    this.categoriesService
      .getCategories()
      .subscribe((data: any) => (this.listCategories = data));
  }


}
