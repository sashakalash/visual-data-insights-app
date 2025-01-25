import { IPlotData, IPlotLayout } from "./plot.intrerface";

// export interface IGraphDataData {
//   type: string;
//   x: string[];
//   y: number[];
//   base: number[];
//   hovertemplate: string;
//   marker: {
//     color: string;
//   },
//   name: string;
// }

// export interface IGraphLayout {
//   width: number;
//   height: number;
//   title: string;
// }

export interface IGraphData {
  data: Array<Partial<IPlotData>>;
  layout: Partial<IPlotLayout>;
};
