import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config.service';
import { HttpHeaderResponse } from '@angular/common/http';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.component.html',
  styleUrls: ['./changeemail.component.less']
})
export class ChangeemailComponent extends BaseComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private configService: ConfigService) {
    super();
  }

  public message: string;
  private newemail1 = '';
  private newemail2 = '';
  private config: Object;
  private userToken: string;

  public ngOnInit(): void {
    this.message = '';
    this.userToken = this.user.getToken();
  }

  public changeEmail(e: any): void {
    e.preventDefault();
    if (e.target && e.target.elements) {
      this.newemail1 = e.target.elements[0].value;
      this.newemail2 = e.target.elements[1].value;

      if (this.newemail1 === this.newemail2) {
        this.showConfig();
      } else {
        this.message = 'Your new emails do not match. Please try again.';
      }
    }
  }

  public showConfig(): void {
    this.configService.postChangeEmail(this.newemail1, this.userToken)
      .subscribe(data => {
        this.logEvent('Email changed.', {'email': this.newemail1});
        this.router.navigate([ 'dashboard' ]);
      },
      (error) => {
        this.logError(error);
        this.router.navigate([ 'notfound' ]);
      }
    );
  }
}
