import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { AppModule } from '../app.module';

import { LoginFormComponent } from './login-form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { UserService } from '../user.service';
import { ConfigService, LoginResponse } from '../config.service';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Router, ActivatedRoute } from '@angular/router';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let trueMockEvent;
  let falseMockEvent;
  let mockUserService;
  let mockResponse;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LoginFormComponent,
        DashboardComponent,
        NotfoundComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: DashboardComponent },
          { path: 'notfound', component: NotfoundComponent }
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
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mockUserService = {
      setUserLoggedIn: () => { }
    };

    trueMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [{
          value: 'user1'
        },
        {
          value: 'Password1'
        }],
      }
    };
    falseMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [{
          value: 'notadmin'
        },
        {
          value: 'notadmin'
        }],
      }
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should log in user', () => {
  //   spyOn((<any>component).router, 'navigate');
  //   component.loginUser(trueMockEvent);
  //   expect(mockUserService.setUserLoggedIn.toHaveBeenCalled);
  // });

  it('should log in user', () => {
    const fakeObservable = Observable.create(
      (observer) => {
        mockResponse = new HttpResponse<LoginResponse>();
        const loginResponse: LoginResponse = {
          token: 'mockToken',
          userName: 'mockUserName',
          id: 'mockId',
          email: 'mockEmail',
        };
        mockResponse.body = loginResponse;
        observer.next(mockResponse.body);
        observer.complete();
      });

    spyOn((<any>component).user, 'setUserLoggedIn');
    spyOn((<any>component).configService, 'postLogin').and.returnValue(fakeObservable);
    component.loginUser(trueMockEvent);
    expect((<any>component).user.setUserLoggedIn).toHaveBeenCalled();
  });
 });
