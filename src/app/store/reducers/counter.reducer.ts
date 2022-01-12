import { Action, createReducer, on } from "@ngrx/store"
import { CounterActions } from "../actions/counter.actions"
import { AppState } from "../app.state"

export interface Counter {
    count: number,
    step: number,
}


const counter: Counter = {
    count: 0,
    step: 1,
}

const initialApplicationState: AppState = {
    counter
}

const counterReducer = createReducer(
    initialApplicationState,
    on(
        CounterActions.increaseCount,
        state => ({
            ...state,
            counter: {
                ...state.counter,
                count: state.counter.count + state.counter.step
            }
        })
    ),

    on(
        CounterActions.decreaseCount,
        state => ({
            ...state,
            counter: {
                ...state.counter,
                count: state.counter.count - state.counter.step
            }
        })
    ),


    on(
        CounterActions.setStep,
        (state: AppState, props: {step: number}) => ({
            ...state,
            counter: {
                ...state.counter,
                step: props.step
            }
        })
    )
    
)


export function reducer(state: AppState | undefined, action: Action) {
    return counterReducer(state, action)
}