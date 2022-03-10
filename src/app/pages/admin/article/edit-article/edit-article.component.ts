import { Component, OnInit } from '@angular/core';
import Categories from 'src/app/models/categories/categories.model';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Article from '../../../../models/Article/article.model';
import { LoginService } from 'src/app/services/login/login.service';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {
  public listCategories: Categories[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private articlesService: ArticlesService
  ) {
    this.categoriesService.getCategories().subscribe((data: any) => {
      this.listCategories = data;
    });
  }

  ngOnInit(): void {}

  articleForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
    category: [0, [Validators.required]],
  });

  createArticle() {
    let user = this.loginService.getUser();
    let author = `${user.firstName} ${user.lastName}`;

    let article: Article = {
      title: this.articleForm.get('title')?.value,
      body: this.articleForm.get('body')?.value,
      category: this.articleForm.get('category')?.value,
      author: author,
    };


  }
}
