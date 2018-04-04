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
  private oldpassword = '';
  private newpassword1 = '';
  private newpassword2 = '';
  private config: Object;
  private userToken: string;

  ngOnInit(): void {
    this.userToken = this.user.getToken();
  }

  resetPassword(e) {
    e.preventDefault();
    if (e.target && e.target.elements) {
      this.oldpassword = e.target.elements[0].value;
      this.newpassword1 = e.target.elements[1].value;
      this.newpassword2 = e.target.elements[2].value;
      if (this.newpassword1 === this.newpassword2) {
        this.showConfig();
      } else {
        this.message = 'Your new passwords do not match. Please try again.';
      }
    } else {
      this.router.navigate([ 'notfound' ]);
    }
  }

  showConfig() {
    this.configService.postChangePass(this.oldpassword, this.newpassword1, this.userToken)
      .subscribe(data => {
        this.router.navigate([ 'dashboard' ]);
      },
    (error) => {
      this.router.navigate([ 'notfound' ]);
    });
  }
}
