import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config.service';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.component.html',
  styleUrls: ['./changeemail.component.less']
})
export class ChangeemailComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private configService: ConfigService) { }

  public message: string;
  private username = '';
  private password = '';
  private newemail1 = '';
  private newemail2 = '';
  private config: Object;

  public ngOnInit() {
    this.message = '';
  }

  changeEmail(e: any) {
    e.preventDefault();
    this.username = e.target.elements[0].value;
    this.password = e.target.elements[1].value;
    this.newemail1 = e.target.elements[2].value;
    this.newemail2 = e.target.elements[3].value;

    if (this.username === 'admin' && this.password === 'admin') {
      if (this.newemail1 === this.newemail2) {
        this.user.setUserLoggedIn();
        this.router.navigate([ 'dashboard' ]);
      } else {
        this.message = 'Your new emails do not match. Please try again.';
        this.router.navigate([ 'change' ]);
      }
    } else {
      this.router.navigate([ 'notfound' ]);
    }
  }

  // showConfig() {
  //   this.configService.postChangeEmail(this.newemail1)
  //     .subscribe(data => this.config = {
  //         Email: data[ 'email' ]
  //     });
  //   }
}
