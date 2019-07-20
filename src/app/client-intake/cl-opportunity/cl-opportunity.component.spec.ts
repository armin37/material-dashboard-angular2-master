import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClOpportunityComponent } from './cl-opportunity.component';

describe('ClOpportunityComponent', () => {
  let component: ClOpportunityComponent;
  let fixture: ComponentFixture<ClOpportunityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClOpportunityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClOpportunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
