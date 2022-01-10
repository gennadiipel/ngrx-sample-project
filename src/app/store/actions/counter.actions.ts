import { createAction, props } from "@ngrx/store";

export namespace CounterActions {
    export const increaseCount = createAction(
        'INCREASE_COUNT',
    )

    export const decreaseCount = createAction(
        'DECREASE_COUNT'
    )
}