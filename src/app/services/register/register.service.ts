import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
/* Model */
import Register from '../../models/register/register.models'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  readonly url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/admin/create'
  }

  register(user: Register) {
    return this.http.post(this.url, user).subscribe(() => {
      this.router.navigate(['/admin/login'])
    },
    (err) => {
      //toastr
      console.log(err.error.message);
    }
    )

  }


}
