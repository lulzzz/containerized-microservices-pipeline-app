import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { BaseComponent } from '../base.component';

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

  public ngOnInit(): void {
    this.name = 'Anonymous';
  }
}
