import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSponsorsComponent } from './slider-sponsors.component';

describe('SliderSponsorsComponent', () => {
  let component: SliderSponsorsComponent;
  let fixture: ComponentFixture<SliderSponsorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderSponsorsComponent]
    });
    fixture = TestBed.createComponent(SliderSponsorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
