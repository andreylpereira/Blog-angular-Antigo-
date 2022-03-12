import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
/* Model */
import Articles from 'src/app/models/articles/articles.model';
/* Services */
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.component.html',
  styleUrls: ['./preview-article.component.scss'],
})
export class PreviewArticleComponent implements OnInit {
  public id: number = 0;
  public article: Articles = {
    title: '',
    body: '',
    category: 0,
    author: '',
    id: 0,
    createdAt: '',
    updatedAt: ''
  };

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => (this.id = params['id']));
    this.getArticle();
  }

  ngOnInit(): void {
    this.getArticle();
    setTimeout(() => {
      this.getArticle();
    }, 100);
  }



  getArticle() {
    this.articlesService.getArticle(this.id).subscribe((data: any) => {
      this.article = data;
    });
  }
}
