import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/* Model */
import Articles from 'src/app/models/articles/articles.model';
/* Services */
import { ArticlesService } from 'src/app/services/articles/articles.service';
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss'],
})
export class ListArticlesComponent implements OnInit {
  public listArticles: Articles[] = [];

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getArticles();
  }

  public getArticles() {
    this.articlesService.getArticles().subscribe((articles: any) => {
      this.listArticles = articles;
    });
  }

  public editArticle(id: number) {
    this.router.navigate([`admin/panel-control/article/${id}/edit`]);
  }

  public deleteArticle(id: number) {
    this.articlesService
      .deleteArticle(id)
      .subscribe((success) => this.getArticles());
  }
}
