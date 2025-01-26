import {
  DisplayGrid,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridType,
} from 'angular-gridster2';
import { Component, input, inject, OnInit } from '@angular/core';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { AppPlotComponent } from '../../shared/app-plot/app-plot.component';
import { plotStore } from '../../store/plot.store';

@Component({
  selector: 'app-visual-data-insights',
  imports: [AppPlotComponent, ToolbarComponent, GridsterComponent, GridsterItemComponent],
  templateUrl: './visual-data-insights.component.html',
  styleUrl: './visual-data-insights.component.scss',
  providers: [plotStore],
})
export class VisualDataInsightsComponent implements OnInit {
  title = input<string>();
  options: GridsterConfig = {
    gridType: GridType.Fit,
    displayGrid: DisplayGrid.Always,
    pushItems: true,
    draggable: {
      enabled: true,
    },
    resizable: {
      enabled: true,
    },
  };
  dashboard: Array<GridsterItem> = [
    { cols: 3, rows: 1, y: 0, x: 0 },
    { cols: 3, rows: 1, y: 2, x: 0 },
    { cols: 4, rows: 3, y: 0, x: 3 },
  ];

  readonly store = inject(plotStore);

  ngOnInit() {
    this.store.loadUsersPlots(this.store);
  }
}
