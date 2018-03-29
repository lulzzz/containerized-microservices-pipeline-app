import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { AppModule } from '../app.module';

import { LoginFormComponent } from './login-form.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserService } from '../user.service';
import { ConfigService } from '../config.service';
import { HttpClientModule } from '@angular/common/http';

import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let trueMockEvent;
  let falseMockEvent;
  let mockUserService;

  beforeEach(async(() => {
    let fixture: ComponentFixture<LoginFormComponent>;
    TestBed.configureTestingModule({
      declarations: [
        LoginFormComponent,
        DashboardComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'dashboard', component: DashboardComponent }
        ]),
        HttpClientModule
      ],
      providers: [
        UserService,
        ConfigService]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    mockUserService = {
      setUserLoggedIn: () => { }
    };

    trueMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [{
          value: 'admin'
        },
        {
          value: 'admin'
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

  it('should navigate to dashboard', () => {
    spyOn((<any>component).router, 'navigate');
    component.loginUser(trueMockEvent);
    expect((<any>component).router.navigate).toHaveBeenCalledWith([ 'dashboard' ]);
  });

  // it('should log in user', () => {
  //   spyOn((<any>component).router, 'navigate');
  //   component.loginUser(trueMockEvent);
  //   expect(mockUserService.setUserLoggedIn.toHaveBeenCalled);
  // });

  it('should navigate to notfound', () => {
    spyOn((<any>component).router, 'navigate');
    component.loginUser(falseMockEvent);
    expect((<any>component).router.navigate).toHaveBeenCalledWith([ 'notfound' ]);
  });

  it('should prevent default', () => {
    component.loginUser(trueMockEvent);
    expect(trueMockEvent.preventDefault.toHaveBeenCalled);
  });
 });
