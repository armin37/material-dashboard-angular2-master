import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClGeneralInfoComponent } from './cl-general-info.component';

describe('ClGeneralInfoComponent', () => {
  let component: ClGeneralInfoComponent;
  let fixture: ComponentFixture<ClGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
