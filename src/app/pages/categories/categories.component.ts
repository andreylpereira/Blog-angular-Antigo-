import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Categories from 'src/app/models/categories/categories.model';
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

  categorySlug(slug: string) {
    this.router.navigate([`/categories/${slug}`])
  }

  ngOnInit(): void {}
}
