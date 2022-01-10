import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State } from "../reducers/counter.reducer";

export namespace CounterSelectors {
    export const state = createFeatureSelector<ApplicationState>('counter')

    export const counter = createSelector(state, state => state.counter)
}