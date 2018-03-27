import { TestBed, inject } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

describe('ConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent
      ],
      providers: [ ConfigService ],
      imports: [ HttpClientModule ]
    });
  });

  it('should be created', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
