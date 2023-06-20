import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRecruiterComponent } from './menu-recruiter.component';

describe('MenuRecruiterComponent', () => {
  let component: MenuRecruiterComponent;
  let fixture: ComponentFixture<MenuRecruiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuRecruiterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuRecruiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
