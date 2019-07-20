import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClCfsDetailsComponent } from './cl-cfs-details.component';

describe('ClCfsDetailsComponent', () => {
  let component: ClCfsDetailsComponent;
  let fixture: ComponentFixture<ClCfsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClCfsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClCfsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
