import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard/auth-guard.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn: boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private authGuardService: AuthGuardService,) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authGuardService.isAuthenticated();
  }

  public sair() {
    this.loginService.logOut();
    this.router.navigate(['/logout']);
  }
}
