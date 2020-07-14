import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError, tap } from 'rxjs/operators';

import { AuthenticationService } from '../../core/services/authentication/authentication.service';
import {
  AuthenticationActionTypes,
  Login, LoginSuccess, LoginFailure,Logout
} from '../actions/authentication.action';


@Injectable()
export class AuthenticationEffects {

  constructor(
    private actions: Actions,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}

  @Effect()
  Login: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN),
      map((action: Login) => action.payload),
      switchMap(payload => {
        return this.authenticationService.login(payload)
        .pipe(
          map((user) => {
            // console.log(JSON.parse(user));
            return new LoginSuccess({token: user.accessToken, email: payload.email});
          }),
          catchError((error) => {
            return of(new LoginFailure({ error: error }));
          }));
    }));


  @Effect({ dispatch: false })
  LoginSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      //when the user logs in successfully, the token and email are saved to localStorage
      localStorage.setItem('token', user.payload.token);
      localStorage.setItem('email', user.payload.email);
      this.router.navigateByUrl('/my-orders');
    })
  );

  @Effect({ dispatch: false })
  LoginFailure: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGIN_FAILURE)
  );

  @Effect({ dispatch: false })
  public Logout: Observable<any> = this.actions.pipe(
    ofType(AuthenticationActionTypes.LOGOUT),
    tap((user) => {
      //when the user log out the token and email are removed from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      this.router.navigateByUrl('/login');
    })
  );
}