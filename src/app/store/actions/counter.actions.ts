import { createAction, props } from "@ngrx/store";

export namespace CounterActions {
    const increaseCount = createAction(
        'INCREASE_COUNT',
    )

    const decreaseCount = createAction(
        'DECREASE_COUNT'
    )
}