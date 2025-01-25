export interface ICoords {
  x: number;
  y: number;
}

export interface ITitle {
  text: string;
}

export interface IPlotOption {
  option_name: string;
  selected_column_name: string;
  selected_aggregation?: string;
  selected_smart_bucketing?: string;
}

export interface IPlotSettings {
  selected_setting_value: boolean;
  setting_name: string;
}

export interface IDisplayLayout extends ICoords {
  cols: number;
  rows: number;
}

export interface IPlotDataMarker {
  color: number[];
  coloraxis: string;
  size: number[];
  sizemode: string;
  sizeref: number;
  symbol: string;
}

export interface IPlotData {
  customdata: Array<number[]>;
  hovertemplate: string;
  legendgroup: string;
  marker: IPlotDataMarker;
  mode: string;
  name: string;
  orientation: string;
  showlegend: boolean;
  x: number[];
  xaxis: string;
  y: number[];
  yaxis: string;
  type: string;
}

export interface IPlotLayoutTemplateDataHistogram2DColorbar {
  outlinewidth: number;
  ticks: string;
}

export interface IPlotLayoutTemplateDataHistogram2D {
  type: string;
  colorbar: IPlotLayoutTemplateDataHistogram2DColorbar;
  colorscale: Array<[number, string]>;
}

export interface IPlotLayoutTemplateDataColorbar {
  outlinewidth: number;
  ticks: string;
}

export interface IPlotLayoutTemplateDataChoropleth {
  type: string;
  colorbar: IPlotLayoutTemplateDataColorbar;
}

export interface IFillPattern {
  fillmode: string;
  size: number;
  solidity: number;
}

export interface IPlotLayoutTemplateDataScatter {
  fillpattern: IFillPattern;
  type: string;
}

export interface IPlotLayoutTemplateDataParcoords {
  type: string;
  line: {
    colorbar: IPlotLayoutTemplateDataColorbar;
  }
}

export interface IPlotLayoutTemplateDataScatter {
  type: string;
  marker: {
    colorbar: IPlotLayoutTemplateDataColorbar;
  }
}

export interface IPlotLayoutTemplateDataBarMarkerLine {
  color: string;
  width: number;
}

export interface IPlotLayoutTemplateDataBarMarkerPattern {
  fillmode: string;
  size: number;
  solidity: number;
}

export interface IPlotLayoutTemplateDataMarker {
  pattern: IPlotLayoutTemplateDataBarMarkerPattern;
}

export interface IPlotLayoutTemplateDataBarMarker extends IPlotLayoutTemplateDataMarker {
  line: IPlotLayoutTemplateDataBarMarkerLine;
}

export interface IPlotLayoutTemplateDataBarError {
  color: string;
}

export interface IPlotLayoutTemplateDataBar {
  error_x: IPlotLayoutTemplateDataBarError;
  error_y: IPlotLayoutTemplateDataBarError;
  marker: IPlotLayoutTemplateDataBarMarker;
  type: string;
}

export interface IPlotLayoutTemplateDataHistogram {
  type: string;
  marker: IPlotLayoutTemplateDataMarker;
}

export interface IPlotLayoutTemplateDataScatter {
  type: string;
  marker: {
    colorbar: IPlotLayoutTemplateDataColorbar;
  }
}

export interface IPlotLayoutTemplateDataScatter3D extends IPlotLayoutTemplateDataScatter {
  line: {
    colorbar: IPlotLayoutTemplateDataColorbar;
  }
}

export interface IPlotLayoutTemplateDataCarpetAxis {
  endlinecolor: string;
  gridcolor: string;
  linecolor: string;
  minorgridcolor: string;
  startlinecolor: string;
}

export interface IPlotLayoutTemplateDataCarpet {
  aaxis: IPlotLayoutTemplateDataCarpetAxis;
  baxis: IPlotLayoutTemplateDataCarpetAxis;
  type: string;
}

export interface IPlotLayoutTemplateDataTableEntity {
  fill: {
    color: string;
  }
  line: {
    color: string;
  }
}

export interface IPlotLayoutTemplateDataTable {
  cells: IPlotLayoutTemplateDataTableEntity;
  header: IPlotLayoutTemplateDataTableEntity;
  type: string;
}

export interface IPlotLayoutTemplateDataBarpolar {
  marker: IPlotLayoutTemplateDataBarMarker;
  type: string;
}

export interface IPlotLayoutTemplateDataPie {
  automargin: string;
  type: string;
}

export interface IPlotLayoutTemplateData {
  histogram2dcontour: IPlotLayoutTemplateDataHistogram2D[];
  choropleth: IPlotLayoutTemplateDataChoropleth[];
  histogram2d: IPlotLayoutTemplateDataHistogram2D[];
  heatmap: IPlotLayoutTemplateDataHistogram2D[];
  heatmapgl: IPlotLayoutTemplateDataHistogram2D[];
  contourcarpet: IPlotLayoutTemplateDataChoropleth[];
  contour: IPlotLayoutTemplateDataHistogram2D[];
  surface: IPlotLayoutTemplateDataHistogram2D[];
  mesh3d: IPlotLayoutTemplateDataChoropleth[];
  scatter: IPlotLayoutTemplateDataScatter[];
  parcoords: IPlotLayoutTemplateDataParcoords[];
  scatterpolargl: IPlotLayoutTemplateDataScatter[];
  bar: IPlotLayoutTemplateDataBar[];
  scattergeo: IPlotLayoutTemplateDataScatter[];
  scatterpolar: IPlotLayoutTemplateDataScatter[];
  histogram: IPlotLayoutTemplateDataHistogram[];
  scattergl: IPlotLayoutTemplateDataScatter[];
  scatter3d: IPlotLayoutTemplateDataScatter3D[];
  scattermapbox: IPlotLayoutTemplateDataScatter[];
  scatterternary: IPlotLayoutTemplateDataScatter[];
  scattercarpet: IPlotLayoutTemplateDataScatter[];
  carpet: IPlotLayoutTemplateDataCarpet[];
  table: IPlotLayoutTemplateDataTable[];
  barpolar: IPlotLayoutTemplateDataBarpolar[];
  pie: IPlotLayoutTemplateDataPie[];
}

export interface IPlotLayoutAxis {
  linecolor: string;
  ticks: string;
}

export interface IPlotLayoutTemplateLayoutAxis extends IPlotLayoutAxis {
  gridcolor: string;
}

export interface IPlotLayoutTemplateLayoutAxisExtended extends IPlotLayoutTemplateLayoutAxis {
  title: {
    standoff: number;
  };
  zerolinecolor: string;
  automargin: boolean;
  zerolinewidth: number;
}

export interface IPlotLayoutTemplateLayoutSceneAxis extends IPlotLayoutTemplateLayoutAxis {
  backgroundcolor: string;
  showbackground: boolean;
  zerolinecolor: string;
  gridwidth: number;
}

export interface IPlotLayoutAxisExtended extends IPlotLayoutAxis {
  anchor: string;
  domain: number[];
  title: ITitle;
  linewidth: number;
  showline: boolean;
  mirror: boolean;
}

export interface IPlotLayoutPolar {
  angularaxis: IPlotLayoutTemplateLayoutAxis;
  radialaxis: IPlotLayoutTemplateLayoutAxis;
}

export interface IPlotLayoutTemplateLayoutPolar extends IPlotLayoutPolar {
  bgcolor: string;
}

export interface IPlotLayoutTemplateLayoutTernary {
  bgcolor: string;
  aaxis: IPlotLayoutTemplateLayoutAxis;
  baxis: IPlotLayoutTemplateLayoutAxis;
  caxis: IPlotLayoutTemplateLayoutAxis;
}

export interface IPlotLayoutTemplateLayoutColorscale {
  sequential: Array<[number, string]>;
  sequentialminus: Array<[number, string]>;
  diverging: Array<[number, string]>;
}

export interface IPlotLayoutTemplateLayoutScene {
  xaxis: IPlotLayoutTemplateLayoutSceneAxis;
  yaxis: IPlotLayoutTemplateLayoutSceneAxis;
  zaxis: IPlotLayoutTemplateLayoutSceneAxis;
}

export interface IPlotLayoutTemplateLayoutAnnotation {
  arrowcolor: string;
  arrowhead: number;
  arrowwidth: number;
}

export interface IPlotLayoutTemplateLayoutGeo {
  bgcolor: string;
  landcolor: string;
  subunitcolor: string;
  showland: boolean;
  showlakes: boolean;
  lakecolor: string;
}

export interface IPlotLayoutTemplateLayout {
  autotypenumbers: string;
  colorway: string[];
  font: {
    color: string;
  }
  hovermode: string;
  hoverlabel: {
    align: string;
  };
  paper_bgcolor: string;
  plot_bgcolor: string;
  polar: IPlotLayoutTemplateLayoutPolar;
  ternary: IPlotLayoutTemplateLayoutTernary;
  coloraxis: {
    colorbar: IPlotLayoutTemplateDataColorbar;
  };
  colorscale: IPlotLayoutTemplateLayoutColorscale;
  xaxis: IPlotLayoutTemplateLayoutAxisExtended;
  yaxis: IPlotLayoutTemplateLayoutAxisExtended;
  scene: IPlotLayoutTemplateLayoutScene;
  shapedefaults: {
    line: {
      color: string;
    }
  };
  annotationdefaults: IPlotLayoutTemplateLayoutAnnotation;
  geo: IPlotLayoutTemplateLayoutGeo;
  title: {
    x: number;
  };
  mapbox: {
    style: string;
  }
}

export interface IPlotLayoutTemplate {
  data: IPlotLayoutTemplateData;
  layout: IPlotLayoutTemplateLayout;
}

export interface IPlotLayoutColoraxis {
  colorbar: {
    title: ITitle
  };
  colorscale: Array<[number, string]>;
}

export interface IPlotLayoutLegend {
  tracegroupgap: number;
  itemsizing: string;
}

export interface IPlotLayout {
  template: IPlotLayoutTemplate;
  xaxis: IPlotLayoutAxisExtended;
  yaxis: IPlotLayoutAxisExtended;
  coloraxis: IPlotLayoutColoraxis;
  legend: IPlotLayoutLegend;
  title: ITitle;
  plot_bgcolor: string;
  polar: IPlotLayoutPolar;
  showlegend: boolean;
}

export interface IPlot {
  data: IPlotData[];
  layout: IPlotLayout;
}

export interface IPlotContainer {
  file_id: number;
  file_name: string;
  plot_id: number;
  favorite: boolean;
  plot_title: string;
  plot_name: string;
  selected_options: IPlotOption[];
  selected_settings: IPlotSettings[];
  description: string;
  interpretation: string;
  plot_style: number;
  display_layout: Partial<IDisplayLayout>;
  plot: IPlot;
  filter_active: boolean;
  filter_instance_id: any;
}
