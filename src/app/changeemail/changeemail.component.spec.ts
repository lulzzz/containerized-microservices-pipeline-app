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
  let falseMockEvent;
  let neFalseMockEvent;
  let mockUserService;

  beforeEach(async(() => {
    let fixture: ComponentFixture<ChangeemailComponent>;
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

    fixture = TestBed.createComponent(ChangeemailComponent);
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
        },
        {
          value: 'newemail'
        },
        {
          value: 'newemail'
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
        },
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
        elements: [{
          value: 'admin'
        },
        {
          value: 'admin'
        },
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
    expect((<any>component).router.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should log in user', () => {
    spyOn((<any>component).router, 'navigate');
    component.changeEmail(trueMockEvent);
    expect(mockUserService.setUserLoggedIn.toHaveBeenCalled);
  });

  it('should navigate to notfound', () => {
    spyOn((<any>component).router, 'navigate');
    component.changeEmail(falseMockEvent);
    expect((<any>component).router.navigate).toHaveBeenCalledWith(['notfound']);
  });

  it('should navigate back to change', () => {
    spyOn((<any>component).router, 'navigate');
    component.changeEmail(neFalseMockEvent);
    expect((<any>component).router.navigate).toHaveBeenCalledWith(['change']);
  });

  it('should prevent default', () => {
    component.changeEmail(trueMockEvent);
    expect(trueMockEvent.preventDefault.toHaveBeenCalled);
  });
});
