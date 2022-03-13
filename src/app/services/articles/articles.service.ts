import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* Model */
import Article from 'src/app/models/Article/article.model';
/* Services */
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly url: string;
  private options: any;

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) {
    this.url = 'http://localhost:8080';
    this.options = loginService.options();
  }

  createArticle(article: Article) {
    return this.http
      .post<any>(`${this.url}/admin/articles/save`, article, this.options)
      .subscribe(
        (data: any) => {
          this.router.navigate([`/admin/panel-control/article/${data.id}`]);
        },
        (err) => {
          //toastr
          console.log(err.error.message);
        }
      );
  }

  updateArticle(article: Article) {
    return this.http
      .put<any>(`${this.url}/admin/articles/update`, article, this.options)
      .subscribe();
  }

  deleteArticle(id: number) {
    return this.http.delete<any>(
      `${this.url}/admin/articles/${id}/delete`,
      this.options
    );
  }

  getArticle(id: number) {
    return this.http.get<any>(`${this.url}/article/${id}`, this.options);
  }

  getArticles(): any {
    return this.http.get<any>(`${this.url}/articles`, this.options);
  }

  getArticlesById(id: number): any {
    return this.http.get<any>(
      `${this.url}/categories/${id}/articles`,
      this.options
    );
  }
}
