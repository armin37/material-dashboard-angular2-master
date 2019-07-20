import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClChildrenDetailComponent } from './cl-children-detail.component';

describe('ClChildrenDetailComponent', () => {
  let component: ClChildrenDetailComponent;
  let fixture: ComponentFixture<ClChildrenDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClChildrenDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClChildrenDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
