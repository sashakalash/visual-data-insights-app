import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../environments/environment';
import { IPlotContainer } from '../interfaces/plot.intrerface';

export const mockedPlot: Partial<IPlotContainer> = {
  plot_id: 1,
  plot_name: 'Outlier',
  selected_options: [
    {
      option_name: 'target_column',
      selected_column_name: 'Cholesterol',
    },
  ],
  selected_settings: [
    {
      selected_setting_value: false,
      setting_name: 'highlight outliers',
    },
  ],
};
const mockedPlotId = 99;
const mockedPlots = [
  {
    file_id: 0,
    file_name: 'string',
    plot_id: 0,
    favorite: false,
    plot_title: 'string',
    plot_name: 'string',
    selected_options: [],
    selected_settings: [],
    description: 'string',
    interpretation: 'string',
    plot_style: 0,
    display_layout: {},
    filter_active: false,
    filter_instance_id: null,
    plot: {
      data: [
        {
          type: 'bar',
          x: ['2016', '2017', '2018'],
          y: [500, 600, 700],
          base: [-500, -600, -700],
          hovertemplate: '%{base}',
          // marker: {
          //   color: 'red',
          // },
          name: 'expenses',
          customdata: [],
          legendgroup: '',
          mode: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
        {
          type: 'bar',
          x: ['2016', '2017', '2018'],
          y: [300, 400, 700],
          base: 0,
          hovertemplate: '%{base}',
          // marker: {
          //   color: 'blue',
          // },
          name: 'revenue',
          customdata: [],
          legendgroup: '',
          mode: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
      ],
      layout: { width: 320, height: 240, title: 'Box Plot' },
    },
  },
  {
    file_id: 0,
    file_name: 'string',
    plot_id: 1,
    favorite: false,
    plot_title: 'string',
    plot_name: 'string',
    selected_options: [],
    selected_settings: [],
    description: 'string',
    interpretation: 'string',
    plot_style: 0,
    display_layout: {},
    filter_active: false,
    filter_instance_id: null,
    plot: {
      data: [
        {
          x: [1, 2, 3, 4],
          y: [1, 4, 9, 16],
          name: 'Trace1',
          type: 'bar',
          customdata: [],
          hovertemplate: '',
          legendgroup: '',
          // marker: {},
          mode: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
        {
          x: [1, 2, 3, 4],
          y: [6, -8, -4.5, 8],
          name: 'Trace2',
          type: 'bar',
          customdata: [],
          hovertemplate: '',
          legendgroup: '',
          // marker: {},
          mode: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
        {
          x: [1, 2, 3, 4],
          y: [-15, -3, 4.5, -8],
          name: 'Trace3',
          type: 'bar',
          customdata: [],
          hovertemplate: '',
          legendgroup: '',
          // marker: {},
          mode: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
        {
          x: [1, 2, 3, 4],
          y: [-1, 3, -3, -4],
          name: 'Trace4',
          type: 'bar',
          customdata: [],
          hovertemplate: '',
          legendgroup: '',
          // marker: {},
          mode: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
      ],
      layout: {
        width: 320,
        height: 240,
        title: 'Correlation Heatmap',
      },
    },
  },
  {
    file_id: 0,
    file_name: 'string',
    plot_id: 2,
    favorite: false,
    plot_title: 'string',
    plot_name: 'string',
    selected_options: [],
    selected_settings: [],
    description: 'string',
    interpretation: 'string',
    plot_style: 0,
    display_layout: {},
    filter_active: false,
    filter_instance_id: null,
    plot: {
      data: [
        {
          x: [1, 2, 3],
          y: [2, 6, 3],
          type: 'scatter',
          mode: 'lines+points',
          name: 'test',
          // marker: { color: 'red' },
          customdata: [],
          hovertemplate: '',
          legendgroup: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
        {
          x: [1, 2, 3],
          y: [2, 5, 3],
          type: 'bar',
          name: 'test2',
          mode: 'lines+points',
          // marker: { color: 'blue' },
          customdata: [],
          hovertemplate: '',
          legendgroup: '',
          orientation: '',
          showlegend: true,
          xaxis: '',
          yaxis: '',
        },
      ],
      layout: { width: 320, height: 240, title: 'Distribution Plot' },
    },
  },
];

@Injectable({
  providedIn: 'root',
})
export class PlotApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserPlots(): Observable<IPlotContainer[]> {
    return this.http.get<any>(`${this.apiUrl}?project_id=29&show_fig=True&cursor=0&limit=4`).pipe(
      map(({ data }) => data.plots),
      catchError(() => of(mockedPlots))
    );
  }

  createPlot(body: Partial<IPlotContainer>): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?file_id=129&store_in_SelectedPlot=True&show_fig=True`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  //TO DO add returned type
  patchPlot(body: Partial<IPlotContainer>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${String(body.plot_id)}/`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  //TO DO add returned type
  deletePlot(id: number = mockedPlotId): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${String(id)}/`);
  }
}
