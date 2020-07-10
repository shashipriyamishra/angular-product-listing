import { AuthActionTypes } from "../actions/auth.actions";
export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: null;
  // error message
  errorMessage: string | null;
}

// State is a single, immutable data structure.
export const initialState: State = {
    isAuthenticated: false,
    user: null,
    errorMessage: null
  };

  export function reducer(state = initialState, action): State {
    switch (action.type) {
      case AuthActionTypes.LOGIN_SUCCESS: {
        return {
          ...state,
          isAuthenticated: true,
        //   user: {
        //     token: action.payload.token,
        //     email: action.payload.email
        //   },
          errorMessage: null
        };
      }
      default: {
        return state;
      }
    }
  }