import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* Model */
import Categories from 'src/app/models/categories/categories.model';
/* Services */
import { CategoriesService } from 'src/app/services/categories/categories.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public listCategories: Categories[] = [];

  constructor(private categoriesService: CategoriesService, private router: Router) {
    this.getCategories();
  }

  getCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((categories: Categories[]) => (this.listCategories = categories));
  }

  categorySlug(id: number) {
    this.router.navigate([`/categories/${id}`])
  }

  ngOnInit(): void {}
}
