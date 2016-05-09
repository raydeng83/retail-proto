import {Component} from '@angular/core';
import {Observable}  from 'rxjs/Observable';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'login',
  templateUrl: 'app/components/login.component.html'
})
export class Login {
  private model = {'username':'', 'password':''};
  private currentUserName: any;


  constructor (private loginService: LoginService){
  }

  onSubmit() {
    this.loginService.sendCredential(this.model).subscribe(
      data => {
                localStorage.setItem("token", JSON.parse(JSON.stringify(data))._body);
                this.loginService.sendToken(localStorage.getItem("token")).subscribe(
                  data => {
                            this.currentUserName=this.model.username;
                            localStorage.setItem("currentUserName", this.model.username);
                            this.model.username='';
                            this.model.password='';
                          },
                  error => console.log(error)
                );
              },
      error => console.log(error)
    );

  }


}
