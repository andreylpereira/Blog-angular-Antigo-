import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
/* Model */
import Article from '../../../../models/Article/article.model';
import Categories from 'src/app/models/categories/categories.model';
/* Services */
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { LoginService } from 'src/app/services/login/login.service';
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
})
export class EditArticleComponent implements OnInit {
  public listCategories: Categories[] = [];
  public id: number = 0;
  public article: Article = {
    title: '',
    body: '',
    category: 0,
    author: '',
  };

  constructor(
    private categoriesService: CategoriesService,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private articlesService: ArticlesService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params: Params) => (this.id = params['id']));

    this.categoriesService.getCategories().subscribe((data: any) => {
      this.listCategories = data;
    });

    this.articlesService.getArticle(this.id).subscribe((data: any) => {
      this.article = data;
    });
  }

  ngOnInit(): void {}

  articleForm: FormGroup = this.formBuilder.group({
    title: ['', [Validators.required]],
    body: ['', [Validators.required]],
    category: [0, [Validators.required]],
  });

  editArticle() {
    let user = this.loginService.getUser();
    let author = `${user.firstName} ${user.lastName}`;
    let article: Article = {
      id: this.id,
      title: this.articleForm.get('title')?.value,
      body: this.articleForm.get('body')?.value,
      category: this.articleForm.get('category')?.value,
      author: author,
    };

    if (this.articleForm.get('category')?.value === 0) {
      article.category = this.article.category;
    }
    this.articlesService.updateArticle(article);
    this.router.navigate([`admin/panel-control`]);
  }
}
