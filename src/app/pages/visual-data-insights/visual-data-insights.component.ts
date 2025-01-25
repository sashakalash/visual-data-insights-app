import {
  DisplayGrid,
  GridsterComponent,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponent,
  GridType,
} from 'angular-gridster2';
import { Component, input, inject } from '@angular/core';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';
import { PlotStore } from '../../store/plot.store';
import { AppPlotComponent } from '../../shared/app-plot/app-plot.component';

@Component({
  selector: 'app-visual-data-insights',
  imports: [AppPlotComponent, ToolbarComponent, GridsterComponent, GridsterItemComponent],
  templateUrl: './visual-data-insights.component.html',
  styleUrl: './visual-data-insights.component.scss',
  providers: [PlotStore],
})
export class VisualDataInsightsComponent {
  title = input<string>();
  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;

  readonly store = inject(PlotStore);
  ngOnInit() {
    this.options = {
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

    this.dashboard = [
      { cols: 3, rows: 1, y: 0, x: 0 },
      { cols: 3, rows: 1, y: 2, x: 0 },
      { cols: 4, rows: 3, y: 0, x: 3 },
    ];

    this.store.loadUsersPlots(this.store);
  }

  ngAfterViewInit() {
    // this.dashboard.forEach((item, index) => {
    //   const container = this.containers.toArray()[index];
    //   const componentFactory = this.componentMap[item['component']];
    //   const plotComponent: ComponentRef<AppPlotComponent> = container.createComponent(componentFactory);
    //   plotComponent.instance.graph =
    // });
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item: any): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(): void {
    this.dashboard.push({ x: 0, y: 0, cols: 1, rows: 1 });
  }
}
