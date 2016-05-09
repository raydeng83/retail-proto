import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'nav-bar',
  directives: [ROUTER_DIRECTIVES],
  providers: [LoginService],
  templateUrl:'app/components/nav-bar.component.html'
})
export class NavBar{

  myLocalStorage: any;

  constructor (private loginService:LoginService) {
    this.myLocalStorage=localStorage;
  }

  onClick() {
    if (this.loginService.checkLogin()) {
      this.loginService.logout();
    }
  }

}
