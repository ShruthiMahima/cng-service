import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationSchemeComponent } from './certification-scheme.component';

describe('CertificationSchemeComponent', () => {
  let component: CertificationSchemeComponent;
  let fixture: ComponentFixture<CertificationSchemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificationSchemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificationSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
