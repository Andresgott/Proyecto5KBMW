import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreBmwComponent } from './sobre-bmw.component';

describe('SobreBmwComponent', () => {
  let component: SobreBmwComponent;
  let fixture: ComponentFixture<SobreBmwComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SobreBmwComponent]
    });
    fixture = TestBed.createComponent(SobreBmwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
