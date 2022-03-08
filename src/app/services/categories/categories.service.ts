import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Category from 'src/app/models/category/category.model';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  readonly url: string;
  private options: any;

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.url = 'http://localhost:8080';
    this.options = loginService.options();
  }

  register(category: Category) {
    return this.http
      .post<any>(`${this.url}/admin/categories/save`, category, this.options)
      .subscribe(
        () => {},
        (err) => {
          //toastr
          console.log(err.error.message);
        }
      );
  }

  getCategories(): any {
    return this.http.get<any>(`${this.url}/categories`, this.options);
  }
}
