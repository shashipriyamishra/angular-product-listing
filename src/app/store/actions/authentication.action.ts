import { Action,createAction } from '@ngrx/store';
import { User } from '../../models/user';

export enum AuthenticationActionTypes {
  LOGIN = '[Authentication] Login',
  LOGIN_SUCCESS = '[Authentication] Login Success',
  LOGIN_FAILURE = '[Authentication] Login Failure',
  LOGOUT = '[Authentication] Logout',
}


export const authentication = createAction('[Authentication] Login');
export const authenticationSuccess = createAction('[Authentication] Login Success');
export const authenticationFailure = createAction('[Authentication] Login Failure');
export const authenticationLogout = createAction('[Authentication] Logout');
export class Login implements Action {
  readonly type = AuthenticationActionTypes.LOGIN;
  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_SUCCESS;
  constructor(public payload: any) {} 
}

export class LoginFailure implements Action {
  readonly type = AuthenticationActionTypes.LOGIN_FAILURE;
  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthenticationActionTypes.LOGOUT;
}

export type AuthenticationActions =
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout;