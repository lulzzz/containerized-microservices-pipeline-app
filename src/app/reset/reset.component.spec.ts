import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ResetComponent } from './reset.component';
import { UserService } from '../user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConfigService } from '../config.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('ResetComponent', () => {
  let component: ResetComponent;
  let trueMockEvent;
  let falseMockEvent;
  let neFalseMockEvent;
  let mockUserService;
  let fixture: ComponentFixture<ResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent,
        ResetComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: DashboardComponent }
        ]),
        HttpClientModule
      ],
      providers: [
        UserService,
        ConfigService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUserService = {
      setUserLoggedIn: () => { }
    };

    trueMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [
        {
          value: 'Password1'
        },
        {
          value: 'newpassword'
        },
        {
          value: 'newpassword'
        }],
      }
    };
    falseMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [
        {
          value: 'notpassword'
        },
        {
          value: 'newpassword'
        },
        {
          value: 'newpassword'
        }],
      }
    };
    neFalseMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [
        {
          value: 'admin'
        },
        {
          value: 'newpassword'
        },
        {
          value: 'notnewpassword'
        }],
      }
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard', () => {
    spyOn((<any>component).router, 'navigate');
    component.resetPassword(trueMockEvent);
    expect((<any>component).router.navigate).toHaveBeenCalledWith(['dashboard']);
  });
});
