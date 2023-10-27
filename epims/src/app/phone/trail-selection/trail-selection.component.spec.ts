import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailSelectionComponent } from './trail-selection.component';

describe('TrailSelectionComponent', () => {
  let component: TrailSelectionComponent;
  let fixture: ComponentFixture<TrailSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrailSelectionComponent]
    });
    fixture = TestBed.createComponent(TrailSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
