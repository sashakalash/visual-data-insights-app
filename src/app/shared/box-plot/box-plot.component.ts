import { Component } from '@angular/core';
import { PlotlyModule } from 'angular-plotly.js';
import * as PlotlyJS from 'plotly.js-dist-min';

PlotlyModule.plotlyjs = PlotlyJS;

@Component({
  selector: 'app-box-plot',
  imports: [PlotlyModule],
  templateUrl: './box-plot.component.html',
  styleUrl: './box-plot.component.scss',
})
export class BoxPlotComponent {
  public graph = {
    data: [
      {
        type: 'bar',
        x: ['2016', '2017', '2018'],
        y: [500, 600, 700],
        base: [-500, -600, -700],
        hovertemplate: '%{base}',
        marker: {
          color: 'red',
        },
        name: 'expenses',
      },
      {
        type: 'bar',
        x: ['2016', '2017', '2018'],
        y: [300, 400, 700],
        base: 0,
        marker: {
          color: 'blue',
        },
        name: 'revenue',
      },
    ],
    layout: { width: 320, height: 240, title: 'Box Plot' },
  };
}
