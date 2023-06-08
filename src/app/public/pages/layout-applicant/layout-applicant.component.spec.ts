import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutApplicantComponent } from './layout-applicant.component';

describe('LayoutApplicantComponent', () => {
  let component: LayoutApplicantComponent;
  let fixture: ComponentFixture<LayoutApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
