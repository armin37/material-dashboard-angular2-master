import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClPersonalAssessmentComponent } from './cl-personal-assessment.component';

describe('ClPersonalAssessmentComponent', () => {
  let component: ClPersonalAssessmentComponent;
  let fixture: ComponentFixture<ClPersonalAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClPersonalAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClPersonalAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
