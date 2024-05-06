import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from "rxjs";
import { AuthService } from "../services/auth.service";
import * as AuthActions from '../actions/auth.actions';


@Injectable()

export class AuthEffects {
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AuthActions.login),
            switchMap(({ username, password }) =>
                this.authService.login(username, password).pipe(
                    map(({ user, token }) => AuthActions.loginSuccess({ user, token })),
                    catchError(error => of(AuthActions.loginFailure({ error })))
                )
            )
        )
    );

    constructor(private actions$: Actions, private authService: AuthService) {
    }
}