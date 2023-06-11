import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRecruiterComponent } from './layout-recruiter.component';

describe('LayoutRecruiterComponent', () => {
  let component: LayoutRecruiterComponent;
  let fixture: ComponentFixture<LayoutRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
