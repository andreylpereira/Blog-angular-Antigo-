import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Category from 'src/app/models/category/category.model';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  readonly url: string;
  private options: any

  constructor(private http: HttpClient, private loginService: LoginService) {
    this.url = 'http://localhost:8080/admin/categories/save';
    this.options = loginService.options();
   }

   register(category: Category) {

    return this.http.post<any>(this.url, category, this.options).subscribe((data) => {
      console.log(data); //

    },
    (err) => {
      //toastr
      console.log(err.error.message);
    }
    )

  }

}
