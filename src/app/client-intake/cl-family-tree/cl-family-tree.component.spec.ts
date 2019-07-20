import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClFamilyTreeComponent } from './cl-family-tree.component';

describe('ClFamilyTreeComponent', () => {
  let component: ClFamilyTreeComponent;
  let fixture: ComponentFixture<ClFamilyTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClFamilyTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClFamilyTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
