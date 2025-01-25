import { Component, input, model } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';
import { IGraphData } from '../../interfaces/graph-data.interface';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-plot',
  imports: [PlotlyModule],
  template: `
    @let graphData = graph();
    @if(graphData) {
      <plotly-plot [data]="graphData.data" [layout]="graphData.layout"></plotly-plot>
    }
  `
})
export class AppPlotComponent {
  graph = model.required<IGraphData | undefined>();
}
