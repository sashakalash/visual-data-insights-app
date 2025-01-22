import { PlotlyModule } from 'angular-plotly.js';
import { Component } from '@angular/core';
import * as PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-distribution-plot',
  imports: [PlotlyModule],
  templateUrl: './distribution-plot.component.html',
  styleUrl: './distribution-plot.component.scss',
})
export class DistributionPlotComponent {
  public graph = {
    data: [
      { x: [1, 2, 3], y: [2, 6, 3], type: 'scatter', mode: 'lines+points', marker: { color: 'red' } },
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { width: 320, height: 240, title: 'Distribution Plot' },
  };
}
