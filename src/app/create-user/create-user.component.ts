import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: [ './create-user.component.less' ]
})
export class CreateUserComponent extends BaseComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private configService: ConfigService) {
    super();
  }

  public message: string;
  private config: Object;
  private username: string;
  private email: string;
  private password1: string;
  private password2: string;
  private userToken: string;

  public ngOnInit(): void {
    this.message = '';
  }

  public createUser(e: any): void {
    e.preventDefault();
    if (e.target && e.target.elements) {
      this.username = e.target.elements[0].value;
      this.email = e.target.elements[1].value;
      this.password1 = e.target.elements[2].value;
      this.password2 = e.target.elements[3].value;
      if (this.password1 === this.password2) {
        this.showConfig();
      } else {
        this.message = 'Passwords do not match. Please try again.';
      }
    }
  }

  public showConfig(): void {
    this.configService.postCreate(this.username, this.email, this.password1)
      .subscribe((data) => {
        if (data[ 'token' ]) {
          this.userToken = data[ 'token'];
          this.user.setUserLoggedIn(this.userToken);
          this.logEvent('User created.', {'email': this.email});
          this.router.navigate([ 'dashboard' ]);
        }
      },
      (error) => {
        this.logError(error);
        this.message = 'Create user failed: ' + error.error;
      },
    );
  }
}
