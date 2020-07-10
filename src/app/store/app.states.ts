import * as auth from './reducers/auth.reducers';



export const initialState = [];
export interface AppState {
  authState: auth.State;
}
export const reducers = {
    auth: auth.reducer
  };
