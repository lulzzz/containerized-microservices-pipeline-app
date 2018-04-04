import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateUserComponent } from './create-user.component';
import { UserService } from '../user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { ConfigService } from '../config.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('CreateUserComponent', () => {
  let component: CreateUserComponent;
  let trueMockEvent;
  let falseMockEvent;
  let mockUserService;
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

  it('should log in user', () => {
    spyOn((<any>component).router, 'navigate');
    component.createUser(trueMockEvent);
    expect(mockUserService.setUserLoggedIn.toHaveBeenCalled);
  });

});
