import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateUserComponent } from './create-user.component';
import { UserService } from '../user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ConfigService, LoginResponse } from '../config.service';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let trueMockEvent;
  let falseMockEvent;
  let mockUserService;
  let mockResponse;
  let fixture: ComponentFixture<CreateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CreateUserComponent,
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
    fixture = TestBed.createComponent(CreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // mockConfigService.postCreate = jasmine.createSpy('mockPostCreate');

    // mockConfigService = {
    //   postCreate: () => {}
    // };
    mockUserService = {
      setUserLoggedIn: () => {}
    };
    trueMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [{
          value: 'user1'
        },
        {
          value: 'email1@email.com'
        },
        {
          value: 'password'
        },
        {
          value: 'password'
        }],
      }
    };
    falseMockEvent = {
      preventDefault: () => {},
      target: {
        elements: [{
          value: 'username'
        },
        {
          value: 'email@email.com'
        },
        {
          value: 'password'
        },
        {
          value: 'notpassword'
        }],
      }
    };
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should prevent default', () => {
    component.createUser(trueMockEvent);
    expect(trueMockEvent.preventDefault.toHaveBeenCalled);
  });

  // NOTE: This will fail right now as is
  it('should log in user', () => {
    // spyOn((<any>component).router, 'navigate');
    const fakeObservable = Observable.create(
      (observer) => {
        // observer
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
        // return mockResponse;
      });

    console.log(component);
    spyOn((<any>component).user, 'setUserLoggedIn');
    spyOn((<any>component).configService, 'postCreate').and.returnValue(fakeObservable);
    component.createUser(trueMockEvent);
    expect((<any>component).user.setUserLoggedIn).toHaveBeenCalled();
  });

});
