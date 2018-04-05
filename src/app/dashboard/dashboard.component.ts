import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { BaseComponent } from '../base.component';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent extends BaseComponent implements OnInit {

  constructor(private router: Router, private user: UserService) {
    super();
  }

  public name: string;
  public email: string;
  public token: string;

  public ngOnInit(): void {
    this.name = this.user.getUsername();
    this.token = this.user.getToken();
  }
}
