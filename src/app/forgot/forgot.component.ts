import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: [ './forgot.component.less' ]
})
export class ForgotComponent extends BaseComponent implements OnInit {

  constructor(private router: Router) {
    super();
  }

  public message: string;

  public ngOnInit(): void {
    this.message = 'Please input your email and you will be sent a new password.';
  }

  forgotPassword(e: any) {
    e.preventDefault();
    const email = e.target.elements[0].value;
    this.router.navigate([ 'login' ]);
    this.message = 'An email has been sent.';
  }
}
