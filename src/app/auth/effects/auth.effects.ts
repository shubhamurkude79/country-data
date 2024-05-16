import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs";
import { AuthService } from "../services/auth.service";
import * as AuthActions from '../actions/auth.actions';
import { ToastrService } from 'ngx-toastr';


@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      switchMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map(({ user, token }) => {
            this.toastr.success('Welcome to your Country app.', 'Login Successful!');
            return AuthActions.loginSuccess({ user, token })
          }
        ),
          catchError((error) => {
            if(error.status == 400){
              this.toastr.warning(error.error.message, 'Error');
              } else if(error.status == 500){
                this.toastr.error(error.error.message, 'Error');
                } else {
                  this.toastr.error(error.error.message, 'Error');
                }
            return of(AuthActions.loginFailure({ error }))
          }
          )
        )
      )
    )
  );

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.register),
      switchMap(({ name, email, password }) =>
        this.authService.register(name, email, password).pipe(
          map(() => {
            this.toastr.success('Please login with your exact credentials now.', 'Successful Registeration!');
            return AuthActions.registerSuccess()
          }
        ),
          catchError((error) => {
            if(error.status == 400){
            this.toastr.warning(error.error.message, 'Error');
            } else if(error.status == 500){
            this.toastr.error(error.error.message, 'Error');
            } else {
              this.toastr.error(error.error.message, 'Error');
            }
            return of(AuthActions.registerFailure({ error }))
        })
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private toastr: ToastrService
  ) {}
}