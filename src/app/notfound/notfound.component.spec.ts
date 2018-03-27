import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NotfoundComponent } from './notfound.component';
import { UserService } from '../user.service';

describe('NotfoundComponent', () => {
  let component: NotfoundComponent;

  beforeEach(async(() => {
    let fixture: ComponentFixture<NotfoundComponent>;
    TestBed.configureTestingModule({
      declarations: [
        NotfoundComponent ],
      imports: [
        RouterTestingModule.withRoutes([])],
      providers: [
        UserService]
    }).compileComponents();

    fixture = TestBed.createComponent(NotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
