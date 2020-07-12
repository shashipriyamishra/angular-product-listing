import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../../models/user';
// import { AuthenticationActionTypes, AuthenticationActions } from '../actions/authentication.action';
import * as authenticationActions from '../actions/authentication.action';

export interface State {
  isAuthenticated: boolean;
  user: User | null;
  errorMessage: string | null;
}

//set the initial state with localStorage
export const initialState: State = {
  isAuthenticated: localStorage.getItem('token')!==null,
  user: {
          token: localStorage.getItem('token'),
          email: localStorage.getItem('email')
        },
  errorMessage: null
};
const authenticationReducer = createReducer(
  initialState,
  on(authenticationActions.authentication, state => ({ 
    ...state,
        isAuthenticated: true,
        user: {
          token: state.user.token,
          email: state.user.email
        },
        errorMessage: null
   })),
   on(authenticationActions.authenticationSuccess, state => ({ 
    ...state,
    isAuthenticated: true,
    user: {
      token: state.user.token,
      email: state.user.email
    },
    errorMessage: null
   })),
  on(authenticationActions.authenticationFailure, state => ({
   ...state,
   errorMessage: 'Wrong credentials.'
   
  })),
  on(authenticationActions.authenticationLogout, state => ({
    ...state,
    initialState
   }))
  
);

export function reducer(state: State | undefined, action: Action) {
  return authenticationReducer(state, action);
}
// export function reducer(state = initialState, action: AuthenticationActions): State {
//   switch (action.type) {
//     case AuthenticationActionTypes.LOGIN_SUCCESS: {
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: {
//           token: action.payload.token,
//           email: action.payload.email
//         },
//         errorMessage: null
//       };
//     }
//     case AuthenticationActionTypes.LOGIN_FAILURE: {
//       return {
//         ...state,
//         errorMessage: 'Wrong credentials.'
//       };
//     }
//     case AuthenticationActionTypes.LOGOUT: {
//       return initialState;
//     }
//     default: {
//       return state;
//     }
//   }
// }
