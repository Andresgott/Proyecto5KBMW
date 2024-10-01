import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuCarreraComponent } from './tu-carrera.component';

describe('TuCarreraComponent', () => {
  let component: TuCarreraComponent;
  let fixture: ComponentFixture<TuCarreraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuCarreraComponent]
    });
    fixture = TestBed.createComponent(TuCarreraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
