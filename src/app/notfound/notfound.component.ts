import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base.component';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.less']
})
export class NotfoundComponent extends BaseComponent implements OnInit {

  constructor() {
    super();
  }

  public ngOnInit(): void { }

}
