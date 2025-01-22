import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrelationHeatmapComponent } from './correlation-heatmap.component';

describe('CorrelationHeatmapComponent', () => {
  let component: CorrelationHeatmapComponent;
  let fixture: ComponentFixture<CorrelationHeatmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrelationHeatmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrelationHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
