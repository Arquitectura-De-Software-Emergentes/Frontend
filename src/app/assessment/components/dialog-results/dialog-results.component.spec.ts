import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogResultsComponent } from './dialog-results.component';

describe('DialogResultsComponent', () => {
  let component: DialogResultsComponent;
  let fixture: ComponentFixture<DialogResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
