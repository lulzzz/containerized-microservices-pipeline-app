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
  let fixture: ComponentFixture<ForgotComponent>;

  beforeEach(async(() => {
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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
