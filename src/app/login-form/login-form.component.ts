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
  private userToken: string;

  public ngOnInit(): void { }

  loginUser(e: any) {
    e.preventDefault();
    if (e.target && e.target.elements) {
      this.email = e.target.elements[0].value;
      this.password = e.target.elements[1].value;
      this.showConfig();
      this.router.navigate([ 'dashboard' ]);
    }
  }

  showConfig() {
    this.configService.postLogin(this.email, this.password)
      .subscribe(data => {
        if (data[ 'token' ]) {
          this.userToken = data[ 'token'];
          this.user.setUserLoggedIn(this.userToken);
          this.logEvent('User logged in', {'email': this.email});
        }
      },
        (error) => {
          this.logError(error);
          this.router.navigate([ 'notfound' ]);
        },
      );
    }
}
