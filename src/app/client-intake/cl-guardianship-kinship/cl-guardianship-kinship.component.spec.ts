import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClGuardianshipKinshipComponent } from './cl-guardianship-kinship.component';

describe('ClGuardianshipKinshipComponent', () => {
  let component: ClGuardianshipKinshipComponent;
  let fixture: ComponentFixture<ClGuardianshipKinshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClGuardianshipKinshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClGuardianshipKinshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
