import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';

import { ConfigService } from '../config.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: [ './login-form.component.less' ]
})
export class LoginFormComponent extends BaseComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private configService: ConfigService) {
    super();
  }

  private config: Object;
  private email: any;
  private password: string;

  public ngOnInit(): void { }

  loginUser(e: any) {
    e.preventDefault();
    this.email = e.target.elements[0].value;
    this.password = e.target.elements[1].value;
    if (this.email === 'admin' && this.password === 'admin') {
      this.user.setUserLoggedIn();
      this.router.navigate([ 'dashboard' ]);
    } else {
      this.router.navigate([ 'notfound' ]);
    }
  }

  // showConfig() {
  //   this.configService.postLogin(this.email, this.password)
  //     .subscribe(data => this.config = {
  //         Username: data[ 'username' ],
  //         Password: data[ 'password' ]
  //     });
  //   }

  // getConfigResponse(): Observable<HttpResponse<Config>> {
  //   return this.http.get<Config>(
  //     this.configUrl, { observe: 'response' });
  // }

}
