import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DashboardComponent } from './dashboard.component';
import { UserService } from '../user.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;

  beforeEach(async(() => {
    let fixture: ComponentFixture<DashboardComponent>;
    TestBed.configureTestingModule({
      declarations: [
        DashboardComponent ],
      imports: [
        RouterTestingModule.withRoutes([])],
      providers: [
        UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
