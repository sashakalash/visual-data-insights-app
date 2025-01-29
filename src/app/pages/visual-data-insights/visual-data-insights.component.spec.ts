import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualDataInsightsComponent } from './visual-data-insights.component';

describe('VisualDataInsightsComponent', () => {
  let component: VisualDataInsightsComponent;
  let fixture: ComponentFixture<VisualDataInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualDataInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualDataInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
