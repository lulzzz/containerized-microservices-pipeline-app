import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ForgotComponent } from './forgot.component';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from '../user.service';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ConfigService } from '../config.service';

describe('ForgotComponent', () => {
  let component: ForgotComponent;
  let mockEvent;
  const router = () => {};


  beforeEach(async(() => {
    let fixture: ComponentFixture<ForgotComponent>;
    TestBed.configureTestingModule({
      declarations: [
        ForgotComponent,
       DashboardComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])],
      providers: [
        UserService,
        ConfigService
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach( () => {
    mockEvent = {
      preventDefault: () => {},
      target: {
        elements: [{
          value: 'admin'
        }],
      }
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to login', () => {
    spyOn((<any>component).router, 'navigate');
    component.forgotPassword(mockEvent);
    expect((<any>component).router.navigate).toHaveBeenCalledWith(['login']);
  });

});
