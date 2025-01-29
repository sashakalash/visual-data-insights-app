import { Component, computed, model } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { IGraphData } from '../../interfaces/graph-data.interface';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-plot',
  imports: [PlotlyModule],
  template: ' <plotly-plot [data]="data()" [layout]="layout()"></plotly-plot> ',
})
export class AppPlotComponent {
  graph = model.required<IGraphData>();
  data = computed(() => this.graph().data);
  layout = computed(() => ({
    ...this.graph().layout,
  }));
}
