import { IPaginationData } from './api-pagination-data.interface';
import { IPlotContainer } from './plot.intrerface';

export interface IPlotApiData {
  plots: IPlotContainer[];
  meta_data: IPaginationData;
}
