import { computed, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { PlotApiService } from '../services/plot-api.service';
import { IPlot, IPlotContainer } from '../interfaces/plot.intrerface';

type PlotState = {
  plots: IPlotContainer[];
  currentPlot: Partial<IPlot>;
  isLoading: boolean;
};

const initialState: PlotState = {
  plots: [],
  currentPlot: {},
  isLoading: false,
};


export const PlotStore = signalStore(
  withState(initialState),
  withComputed(({ plots }) => ({
   graphs: computed(() => plots().map((plot: IPlotContainer) => plot.plot))
  })),
  withMethods((store, plotApiService = inject(PlotApiService)) => ({
    updatePlot(plot: Partial<IPlotContainer>): void {
      patchState(store, (state) => ({ currentPlot: { ...state.currentPlot, plot } }));
    },
    clearCurrentPlot(): void {
      patchState(store, () => ({ currentPlot: {} }));
    },
    loadUsersPlots: rxMethod(
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
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
  }))
);
