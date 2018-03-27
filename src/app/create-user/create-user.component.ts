import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Observable } from 'rxjs/Observable';

import { ConfigService } from '../config.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: [ './create-user.component.less' ]
})
export class CreateUserComponent implements OnInit {

  constructor(private router: Router, private user: UserService, private configService: ConfigService) { }

  public message: string;
  private config: Object;
  private email: string;
  private password1: string;
  private password2: string;

  public ngOnInit(): void {
    this.message = '';
  }

  createUser(e: any) {
    e.preventDefault();
    this.email = e.target.elements[0].value;
    this.password1 = e.target.elements[1].value;
    this.password2 = e.target.elements[2].value;
    if (this.password1 === this.password2) {
      this.user.setUserLoggedIn();
      this.router.navigate([ 'dashboard' ]);
    } else {
      this.message = 'Passwords do not match. Please try again.';
    }
  }

  // showConfig() {
  //   this.configService.postCreate(this.email, this.password1, this.password2)
  //     .subscribe(data => this.config = {
  //         //create user logic goes here
  //         Username: data[ 'heroesUrl' ],
  //         Password:  data[ 'textfile' ],
  //         Email: data[ 'email' ]
  //     });
  // }
}
