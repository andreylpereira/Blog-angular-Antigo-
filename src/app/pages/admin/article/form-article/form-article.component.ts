import { Component, OnInit } from '@angular/core';
import Categories from 'src/app/models/categories/categories.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss']
})
export class FormArticleComponent implements OnInit {

  public listCategories: Categories[] = []
  constructor(private categoriesService: CategoriesService) {
    this.categoriesService.getCategories().subscribe((data:any) => {

      this.listCategories = data
    });
   }

  ngOnInit(): void {
  }

  verLista() {
    console.log(this.listCategories);

  }
}
