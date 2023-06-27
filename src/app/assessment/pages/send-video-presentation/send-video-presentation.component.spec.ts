import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVideoPresentationComponent } from './send-video-presentation.component';

describe('SendVideoPresentationComponent', () => {
  let component: SendVideoPresentationComponent;
  let fixture: ComponentFixture<SendVideoPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendVideoPresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendVideoPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
