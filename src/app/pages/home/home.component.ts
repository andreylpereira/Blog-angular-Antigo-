import { Component, OnInit } from '@angular/core';
/* Model */
import Articles from 'src/app/models/articles/articles.model';
/* Services */
import { ArticlesService } from 'src/app/services/articles/articles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public listArticles: Articles[] = [];

  constructor(private articlesService: ArticlesService) {
    this.getArticle()
   }

  ngOnInit(): void {
  }

  getArticle() {
    this.articlesService.getArticles().subscribe((articles: Articles[]) => {
      this.listArticles = articles
    }
    )
  }
}
