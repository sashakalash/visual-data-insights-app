import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { IPlotContainer } from '../interfaces/plot.intrerface';

const mockedPlot: Partial<IPlotContainer> = {
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

@Injectable({
  providedIn: 'root',
})
export class PlotApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getUserPlots(): Observable<IPlotContainer[]> {
    return this.http
      .get<any>(`${this.apiUrl}?project_id=29&show_fig=True&cursor=0&limit=4`)
      .pipe(map(({ data }) => data.plots));
  }

  createPlot(body: Partial<IPlotContainer> = mockedPlot): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}?file_id=129&store_in_SelectedPlot=True&show_fig=True`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    });
  }

  //TO DO add returned type
  patchPlot(body: any, id: number = mockedPlotId): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${String(id)}/`, body, {
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
