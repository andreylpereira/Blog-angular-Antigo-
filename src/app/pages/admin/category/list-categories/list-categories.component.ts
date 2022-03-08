import { Component, OnInit } from '@angular/core';
import Categories from 'src/app/models/categories/categories.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.scss'],
})
export class ListCategoriesComponent implements OnInit {
  public listCategories: Categories[] = [];

  constructor(private categoriesService: CategoriesService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  public getCategories() {
    this.categoriesService
      .getCategories()
      .subscribe((data: any) => (this.listCategories = data));
  }
}
