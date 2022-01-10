import { createReducer } from "@ngrx/store"

export interface State {
    counter: number
}

const initialApplicationState: State = {
    counter: 0
}

const counterReducer = createReducer(
    initialApplicationState,
    
)