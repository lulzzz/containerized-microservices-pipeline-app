import { TestBed, inject, async } from '@angular/core/testing';

import { ConfigService } from './config.service';
import { HttpClientModule } from '@angular/common/http';

import { ChangeEmail, CreateUser, Login, ChangePass } from './config.service';

describe('ConfigService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ ConfigService ],
      imports: [ HttpClientModule ]
    });
  }));

  it('should be created', inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
