import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClCfsTimelineComponent } from './cl-cfs-timeline.component';

describe('ClCfsTimelineComponent', () => {
  let component: ClCfsTimelineComponent;
  let fixture: ComponentFixture<ClCfsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClCfsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClCfsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
