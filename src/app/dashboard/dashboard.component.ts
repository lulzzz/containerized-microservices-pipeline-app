import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }

  public name: string;

  public ngOnInit(): void {
    this.name = 'Anonymous';
  }
    // this.name = this.user.getUsername();
}
