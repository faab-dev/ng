import { Component }   from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';

import {authResponce, LoginService} from "./login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    private modelService: LoginService,
    // private route: ActivatedRoute
  ) {
  }

  onLogin(login: string, password: string) {
    var Login = {login: login, password: password};
    this.modelService.postSignIn(Login)
      .subscribe(authResponce => {

        if(!authResponce.accessToken || !authResponce.userID) {
          // @TODO Develop error handler
          console.log("wrong access token");
          this.logout();
          return;
        }

        this.getUserByAuth(authResponce);
      });
  }

  getUserByAuth(authResponce:authResponce) {
    this.authService.getUser(authResponce.userID, authResponce.accessToken)
      .subscribe(user => {


        if( !user ){
          // @TODO Develop error handler
          console.log("no user");
          this.logout();
          return;
        }
        if( !this.authService.setAuthData(user, authResponce) ){
          // @TODO Develop error handler
          console.log("wrong access data");
          this.logout();
          return;
        }

        window.localStorage.token = JSON.stringify({ accessToken: authResponce.accessToken, id: authResponce.userID });

        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin/hotels';

        this.router.navigate([redirect]);

      });
  }

  logout() {
    this.authService.logout();
  }
}
