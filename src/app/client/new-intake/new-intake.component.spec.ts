import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIntakeComponent } from './new-intake.component';

describe('NewIntakeComponent', () => {
  let component: NewIntakeComponent;
  let fixture: ComponentFixture<NewIntakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewIntakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewIntakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
