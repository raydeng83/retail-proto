import {Component} from '@angular/core';
import {Home} from './components/home.component';

@Component({
    selector: 'my-app',
    directives: [Home],
    template: `
      <home></home>
    `
})
export class AppComponent { }
