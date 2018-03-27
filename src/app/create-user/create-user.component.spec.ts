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

  beforeEach(async(() => {
    let fixture: ComponentFixture<CreateUserComponent>;
    TestBed.configureTestingModule({
      declarations: [
        CreateUserComponent,
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
        ConfigService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateUserComponent);
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
          value: 'email'
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
          value: 'email'
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

  it('should navigate to dashboard', () => {
    spyOn((<any>component).router, 'navigate');
    component.createUser(trueMockEvent);
    expect((<any>component).router.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should log in user', () => {
    spyOn((<any>component).router, 'navigate');
    component.createUser(trueMockEvent);
    expect(mockUserService.setUserLoggedIn.toHaveBeenCalled);
  });

});
