import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';
import { UserService } from '../user.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(async(() => {
    let fixture: ComponentFixture<HeaderComponent>;
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent ],
      imports: [
        RouterTestingModule.withRoutes([])],
      providers: [
        UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
