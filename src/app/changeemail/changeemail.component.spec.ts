import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { UserService } from '../user.service';
import { ChangeemailComponent } from './changeemail.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConfigService } from '../config.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


describe('ChangeemailComponent', () => {
  let component: ChangeemailComponent;
  let trueMockEvent;
  let neFalseMockEvent;
  let mockUserService;
  let fixture: ComponentFixture<ChangeemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeemailComponent,
        DashboardComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([
           { path: 'dashboard', component: DashboardComponent }
        ]),
        HttpClientModule],
      providers: [
        UserService,
        ConfigService ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeemailComponent);
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
          value: 'newemail'
        },
        {
          value: 'newemail'
        }],
      }
    };
    neFalseMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [
        {
          value: 'newemail'
        },
        {
          value: 'notnewemail'
        }],
      }
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to dashboard', () => {
    spyOn((<any>component).router, 'navigate');
    component.changeEmail(trueMockEvent);
    return expect((<any>component).router.navigate).toHaveBeenCalledWith(['dashboard']);
  });
});