import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* Model */
import Article from '../../../../models/Article/article.model';
import Categories from 'src/app/models/categories/categories.model';
/* Services */
import { ArticlesService } from 'src/app/services/articles/articles.service';
import { LoginService } from 'src/app/services/login/login.service';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-form-article',
  templateUrl: './form-article.component.html',
  styleUrls: ['./form-article.component.scss'],
})
export class FormArticleComponent implements OnInit {
  public listCategories: Categories[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private articlesService: ArticlesService,
    private router: Router
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

    this.articlesService.createArticle(article);
    this.router.navigate([`admin/panel-control`]);
  }
}
