import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Article from 'src/app/models/Article/article.model';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  readonly url: string;
  private options: any;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.url = 'http://localhost:8080';
    this.options = loginService.options();
  }

  createArticle(article: Article) {
    return this.http
      .post<any>(`${this.url}/admin/articles/save`, article, this.options)
      .subscribe(
        () => {},
        (err) => {
          //toastr
          console.log(err.error.message);
        }
      );
  }

  updateArticle(article: Article) {
    return this.http
      .put<any>(`${this.url}/admin/categories/update`, article, this.options)
      .subscribe();
  }

  deleteArticle(id: number) {
    return this.http.delete<any>(
      `${this.url}/admin/articles/${id}/delete`,
      this.options
    );
  }
  getArticle(id: number) {
    return this.http.get<any>(`${this.url}/categories/${id}`, this.options);
  }
  getArticles(): any {
    return this.http.get<any>(`${this.url}/articles`, this.options);
  }
}
