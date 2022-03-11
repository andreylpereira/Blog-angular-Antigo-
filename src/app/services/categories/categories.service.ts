import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/* Model */
import Category from 'src/app/models/category/category.model';
/* Services */
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

  createCategory(category: Category) {
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

  updateCategory(category: Category) {
    return this.http
      .put<any>(`${this.url}/admin/categories/update`, category, this.options)
      .subscribe();
  }

  deleteCategory(id: number) {
    return this.http.delete<any>(
      `${this.url}/admin/categories/${id}/delete`,
      this.options
    );
  }

  getCategories(): any {
    return this.http.get<any>(`${this.url}/categories`, this.options);
  }

  getCategory(id: number) {
    return this.http.get<any>(`${this.url}/categories/${id}`, this.options);
  }
}
