import { inject } from '@angular/core';
import { of, pipe, switchMap, tap, withLatestFrom } from 'rxjs';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
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
  { providedIn: 'root' },
  withDevtools('plots-store'),
  withState(initialState),
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
    createPlot: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        withLatestFrom(of(store.currentPlot())),
        switchMap(([_action, currentPlot]) => {
          console.log(currentPlot);
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
    editPlot: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        withLatestFrom(store.currentPlot),
        switchMap((currentPlot) => {
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
    deletePlot: rxMethod<IPlotContainer>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap((plot) => {
          return plotApiService.deletePlot(plot.plot_id).pipe(
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
