import { computed, inject } from '@angular/core';
import { pipe, switchMap, tap, withLatestFrom } from 'rxjs';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { PlotApiService } from '../services/plot-api.service';
import { IPlotContainer } from '../interfaces/plot.intrerface';

type PlotState = {
  plots: IPlotContainer[];
  currentPlot: Partial<IPlotContainer>;
  isLoading: boolean;
};

const initialState: PlotState = {
  plots: [],
  currentPlot: {},
  isLoading: false,
};

export const plotStore = signalStore(
  withState(initialState),
  withComputed(({ plots }) => ({
    graphs: computed(() => plots().map((plot: IPlotContainer) => plot.plot)),
  })),
  withMethods((store, plotApiService = inject(PlotApiService)) => ({
    updateCurrentPlot(plot: Partial<IPlotContainer>): void {
      patchState(store, (state) => ({ currentPlot: { ...state.currentPlot, ...plot } }));
    },
    clearCurrentPlot(): void {
      patchState(store, () => ({ currentPlot: {} }));
    },
    loadUsersPlots: rxMethod(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return plotApiService.getUserPlots().pipe(
            tapResponse({
              next: (plots) => patchState(store, { plots }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
    createPlot: rxMethod(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        withLatestFrom(store.currentPlot),
        switchMap((currentPlot: Partial<IPlotContainer>) => {
          return plotApiService.createPlot(currentPlot).pipe(
            tapResponse({
              next: (plots) => patchState(store, { plots }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
    editPlot: rxMethod(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        withLatestFrom(store.currentPlot),
        switchMap((currentPlot: Partial<IPlotContainer>) => {
          return plotApiService.patchPlot(currentPlot).pipe(
            tapResponse({
              next: (plots) => patchState(store, { plots }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
    deletePlot: rxMethod(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        withLatestFrom(store.currentPlot),
        switchMap((currentPlot: Partial<IPlotContainer>) => {
          return plotApiService.deletePlot(currentPlot.plot_id).pipe(
            tapResponse({
              next: (plots) => patchState(store, { plots }),
              error: console.error,
              finalize: () => patchState(store, { isLoading: false }),
            })
          );
        })
      )
    ),
  }))
);
