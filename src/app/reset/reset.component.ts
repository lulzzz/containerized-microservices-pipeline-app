import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config.service';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.less']
})
export class ResetComponent extends BaseComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private configService: ConfigService) {
    super();
  }

  public message = '';
  private username = '';
  private password = '';
  private newpassword1 = '';
  private newpassword2 = '';
  private config: Object;

  ngOnInit() {
  }

  resetPassword(e) {
    e.preventDefault();
    this.username = e.target.elements[0].value;
    this.password = e.target.elements[1].value;
    this.newpassword1 = e.target.elements[2].value;
    this.newpassword2 = e.target.elements[3].value;
    if (this.username === 'admin' && this.password === 'admin') {
      if (this.newpassword1 === this.newpassword2) {
        this.user.setUserLoggedIn();
        this.router.navigate([ 'dashboard' ]);
      } else {
        this.message = 'Your new passwords do not match. Please try again.';
        this.router.navigate([ 'reset' ]);
      }
    } else {
      this.router.navigate([ 'notfound' ]);
    }
  }

  // showConfig() {
  //   this.configService.postChangePass(this.username, this.newpassword1)
  //     .subscribe(data => this.config = {
  //         OldPassword: data[ 'oldpass' ],
  //         NewPassword:  data[ 'newpass' ],
  //     });
  //   }
}
