import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
/* Model */
import Articles from 'src/app/models/articles/articles.model';
/* Services */
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-articles-slug',
  templateUrl: './articles-slug.component.html',
  styleUrls: ['./articles-slug.component.scss'],
})
export class ArticlesSlugComponent implements OnInit {
  public id: number = 0;
  public listArticles: Articles[] = [];

  constructor(
    private articlesService: ArticlesService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => (this.id = params['id']));

    this.articlesService
      .getArticlesById(this.id)
      .subscribe((articles: any) => (this.listArticles = articles));
  }

  ngOnInit(): void {}
}

// getArticles() {
//   this.articlesService.getArticlesBySlug(this.slug).subscribe((articles: Articles[]) =>
//   this.listArticles = articles)
// }
