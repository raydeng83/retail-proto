import {Component} from '@angular/core';
import {Home} from './components/home.component';
import {NavBar} from './components/nav-bar.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import {LoginService} from './services/login.service';
import {RegisterService} from './services/register.service';
import {Login} from './components/login.component';
import {Register} from './components/register.component'

@Component({
    selector: 'my-app',
    providers:[ROUTER_PROVIDERS, HTTP_PROVIDERS, LoginService, RegisterService],
    directives: [Home, ROUTER_DIRECTIVES, NavBar, Login, Register],
    template: `
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
    `
})
@RouteConfig([
  {path: '/home', name: 'Home', component: Home, useAsDefault:true},
  {path: '/login', name: 'Login', component:Login},
  {path: '/register', name: "Register", component: Register},
])
export class AppComponent { }
