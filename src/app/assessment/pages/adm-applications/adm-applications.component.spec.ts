import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmApplicationsComponent } from './adm-applications.component';

describe('AdmApplicationsComponent', () => {
  let component: AdmApplicationsComponent;
  let fixture: ComponentFixture<AdmApplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmApplicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
