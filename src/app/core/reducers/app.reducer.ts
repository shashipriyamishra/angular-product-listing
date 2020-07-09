import { Action } from '@ngrx/store';


export const ACTIONS = {
    LOGIN: 'LOGIN',
}
const initialState = [
    {app:[]}
]
export function freelancersReducer(
    state = [],
    action: Action) {
    switch (action.type) {
        case ACTIONS.LOGIN:
            // Return the new state with the payload 
            return Array.prototype.concat(action.payload);
    default:
            return state;
    }
}