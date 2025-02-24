import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPlotComponent } from './app-plot.component';

describe('AppPlotComponent', () => {
  let component: AppPlotComponent;
  let fixture: ComponentFixture<AppPlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppPlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppPlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
