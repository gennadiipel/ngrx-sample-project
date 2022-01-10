import { createReducer, on } from "@ngrx/store"
import { CounterActions } from "../actions/counter.actions"

export interface State {
    counter: number
}

const initialApplicationState: State = {
    counter: 0
}

const counterReducer = createReducer(
    initialApplicationState,
    on(
        CounterActions.increaseCount,
        state => ({
            ...state,
            counter: state.counter + 1
        })
    ),

    on(
        CounterActions.decreaseCount,
        state => ({
            ...state,
            counter: state.counter - 1
        })
    )
    
)