import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateOfferComponent } from './dialog-create-offer.component';

describe('DialogCreateOfferComponent', () => {
  let component: DialogCreateOfferComponent;
  let fixture: ComponentFixture<DialogCreateOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateOfferComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCreateOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
