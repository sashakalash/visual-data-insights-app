import { Component } from '@angular/core';
import { VisualDataInsightsComponent } from './pages/visual-data-insights/visual-data-insights.component';
import { MenuComponent } from './shared/menu/menu.component';

@Component({
  selector: 'app-root',
  imports: [
    MenuComponent,
    VisualDataInsightsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'visual-data-insights-app';
  BoxPlotComponent: any;
  CorrelationHeatmapComponent: any;
  DistributionPlotComponent: any;
}
