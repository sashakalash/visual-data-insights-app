import { DisplayGrid, GridsterComponent, GridsterConfig, GridsterItem, GridsterItemComponent, GridType } from 'angular-gridster2';
import { Component, input, ViewChild, ViewChildren, QueryList, ViewContainerRef, Type} from '@angular/core';
import { BoxPlotComponent } from '../../shared/box-plot/box-plot.component';
import { CorrelationHeatmapComponent } from '../../shared/correlation-heatmap/correlation-heatmap.component';
import { DistributionPlotComponent } from '../../shared/distribution-plot/distribution-plot.component';
import { ToolbarComponent } from '../../shared/toolbar/toolbar.component';

@Component({
  selector: 'app-visual-data-insights',
  imports: [
    BoxPlotComponent,
    CorrelationHeatmapComponent,
    DistributionPlotComponent,
    ToolbarComponent,
    GridsterComponent,
    GridsterItemComponent,
  ],
  templateUrl: './visual-data-insights.component.html',
  styleUrl: './visual-data-insights.component.scss',
})
export class VisualDataInsightsComponent {
  @ViewChildren('dynamicContainer', { read: ViewContainerRef })
  containers!: QueryList<ViewContainerRef>;

  title = input<string>();
  componentMap: { [key: string]: Type<any> } = {
    BoxPlotComponent,
    CorrelationHeatmapComponent,
    DistributionPlotComponent,
  };

  options!: GridsterConfig;
  dashboard!: Array<GridsterItem>;

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      { cols: 3, rows: 1, y: 0, x: 0, component: 'BoxPlotComponent' },
      { cols: 3, rows: 1, y: 2, x: 0, component: 'DistributionPlotComponent' },
      { cols: 4, rows: 3, y: 0, x: 3, component: 'CorrelationHeatmapComponent' },
    ];
  }

  ngAfterViewInit() {
    this.dashboard.forEach((item, index) => {
      const container = this.containers.toArray()[index];
      const componentFactory = this.componentMap[item['component']];
      container.createComponent(componentFactory);
    });
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
