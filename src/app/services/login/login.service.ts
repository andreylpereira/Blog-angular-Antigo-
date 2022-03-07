import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Login from '../../models/login/login.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url: string;

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/authenticate';
  }

  login(user: Login) {
    return this.http.post<any>(this.url, user).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['/home'])
      },
      (err) => {
      //toastr
        console.log(err.error.message);
      }
    );
  }

  logOut() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/home']);
  }
}
