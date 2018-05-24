import { Component }   from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../auth.service';

import {TranslateService} from '@ngx-translate/core';


import {authResponce, LoginService, Login} from "./login.service";

import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  languages:object[];
  current_language:string = 'ru';

  constructor(
    public authService: AuthService,
    public router: Router,
    private modelService: LoginService,
    // private route: ActivatedRoute
    public translate: TranslateService
  ) {
    this.languages = environment.languages;

    this.translate.addLangs(['en', 'ru'] );
    this.translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  onLogIn(login: string, password: string, $event) {

    if( $event ){
      $event.preventDefault();
    }
    login = String(login).trim();
    password = String(password).trim();

    if( !login || !password ){
      console.log('login or pass is empty');
      return;
    }

    var Login:Login = {login: login, password: password};
    console.log("Login");
    console.log(Login);

    this.modelService.postSignIn(Login)
      .subscribe(authResponce => {

        console.log("postSignIn");

        console.log("authResponce");
        console.log(authResponce);


        if(!authResponce || !authResponce.accessToken || !authResponce.userID) {
          // @TODO Develop error handler
          console.log("wrong access token");
          this.logout();
          return;
        }

        this.getUserByAuth(authResponce);
      });
  }

  getUserByAuth(authResponce:authResponce) {
    console.log("getUserByAuth :: authResponce");
    console.log(authResponce);

    this.authService.getUser(authResponce.userID, authResponce.accessToken)
      .subscribe(user => {

        console.log("user");
        console.log(user);


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

        /*let navigationExtras: NavigationExtras = {
          queryParams: { 'session_id': sessionId },
          fragment: 'anchor'
        };*/

        this.router.navigate([redirect]);

      });
  }



  logout() {
    this.authService.logout();
  }
}
