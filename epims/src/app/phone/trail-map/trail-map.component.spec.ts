import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailMapComponent } from './trail-map.component';

describe('TrailMapComponent', () => {
  let component: TrailMapComponent;
  let fixture: ComponentFixture<TrailMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailMapComponent]
    });
    fixture = TestBed.createComponent(TrailMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
