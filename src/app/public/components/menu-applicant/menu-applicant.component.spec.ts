import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuApplicantComponent } from './menu-applicant.component';

describe('MenuApplicantComponent', () => {
  let component: MenuApplicantComponent;
  let fixture: ComponentFixture<MenuApplicantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuApplicantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuApplicantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
