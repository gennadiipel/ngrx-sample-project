import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Counter } from "../reducers/counter.reducer";

export namespace CounterSelectors {

    const state = createFeatureSelector<AppState>('counter')

    const selectCounter = createSelector(
        state,
        (state: AppState) => state.counter
    )

    export const selectFeatureCount = createSelector(
        selectCounter,
        (state: Counter) => state.count
    )

    export const selectFeatureStep = createSelector(
        selectCounter,
        (state: Counter) => state.step
    )

    // костыль пиздец

    // const selectFeature = (state: {counter: AppState}) => state.counter.counter

    // export const selectFeatureStep = createSelector(
    //     selectFeature,
    //     (state: Counter) => state.count
    // )
}