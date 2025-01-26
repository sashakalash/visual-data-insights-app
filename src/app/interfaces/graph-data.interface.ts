import { IPlotData, IPlotLayout } from './plot.intrerface';

export interface IGraphData {
  data: Array<Partial<IPlotData>>;
  layout: Partial<IPlotLayout>;
}
