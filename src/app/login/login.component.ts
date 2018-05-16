import { Component }   from '@angular/core';
import { ParamMap, Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';
import { switchMap } from 'rxjs/operators';

import {Login, LoginService} from "./login.service";
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  message: string;

  value = '';
  values = '';
  selectedId;

  loggedUser$: object;


  constructor(
    public authService: AuthService,
    public router: Router,
    private modelService: LoginService,
    // private configService:ConfigService,
    private route: ActivatedRoute
  ) {

    this.setMessage();
  }

  onLogin(login: string, password: string) {
    let Login = {login: login, password: password};
    this.modelService.postSignIn(Login)
      .subscribe(loggedUser => {
        if(loggedUser.id) {
          this.authService.isLoggedIn = true;
          this.loggedUser$ = {id: loggedUser.id};

        }else{
          this.authService.isLoggedIn = false;
          this.loggedUser$ = {};
        }

        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/hotels';

        // Redirect the user
        this.router.navigate([redirect]);
      });
  }


  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/hotels';

        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
