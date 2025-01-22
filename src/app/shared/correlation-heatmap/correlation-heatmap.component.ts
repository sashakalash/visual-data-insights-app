import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-correlation-heatmap',
  imports: [PlotlyModule],
  templateUrl: './correlation-heatmap.component.html',
  styleUrl: './correlation-heatmap.component.scss',
})
export class CorrelationHeatmapComponent {
  trace1 = {
    x: [1, 2, 3, 4],
    y: [1, 4, 9, 16],
    name: 'Trace1',
    type: 'bar',
  };
  trace2 = {
    x: [1, 2, 3, 4],
    y: [6, -8, -4.5, 8],
    name: 'Trace2',
    type: 'bar',
  };
  trace3 = {
    x: [1, 2, 3, 4],
    y: [-15, -3, 4.5, -8],
    name: 'Trace3',
    type: 'bar',
  };

  trace4 = {
    x: [1, 2, 3, 4],
    y: [-1, 3, -3, -4],
    name: 'Trace4',
    type: 'bar',
  };

  public graph = {
    data: [this.trace1, this.trace2, this.trace3, this.trace4],
    layout: {
      xaxis: {
        title: {
          text: 'X axis',
        },
      },
      yaxis: {
        title: {
          text: 'Y axis',
        },
      },
      barmode: 'relative',
      title: {
        text: 'Correlation Heatmap',
      },
    }
  };
}
