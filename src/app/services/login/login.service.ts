import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/* Model */
import Login from '../../models/login/login.model';
/* Services */
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  readonly url: string;

  private user: {
    id: number;
    firstName: string;
    lastName: string;
  } = {
    id: 0,
    firstName: '',
    lastName: '',
  };

  constructor(private http: HttpClient, private router: Router) {
    this.url = 'http://localhost:8080/admin/authenticate';
  }

  login(user: Login) {
    return this.http.post<any>(this.url, user).subscribe(
      (data) => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['/home']);
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

  getUser() {
    const session: any = localStorage.getItem('currentUser');
    const data = JSON.parse(session);
    this.user.id = data.id;
    this.user.firstName = data.firstName;
    this.user.lastName = data.lastName;
    return this.user;
  }

  options() {
    const session: any = localStorage.getItem('currentUser');
    const data = JSON.parse(session);
    const token = data.token;

    const options = {
      headers: new HttpHeaders()
        .set('Access-Control-Allow-Origin', '*')
        .set(
          'Access-Control-Allow-Methods',
          'GET, POST, PATCH, PUT, DELETE, OPTIONS, PUT'
        )
        .append('Authorization', `Bearer ${token}`),
    };

    return options;
  }
}
