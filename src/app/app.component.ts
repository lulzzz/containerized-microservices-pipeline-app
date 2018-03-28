import { Component } from '@angular/core';
import { AppInsightsService } from './appinsights.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  constructor(private appInsightsService: AppInsightsService) {
  }
}
