import { createReducer, on } from "@ngrx/store";
import { login, loginSuccess, loginFailure, logout, setUser } from "../actions/auth.actions";
import { User } from "../models/auth.model";

export interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
    token: string | null;
    error: any;
}

export const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
};

export const authReducer = createReducer(
    initialState,
    on(loginSuccess,(state, {user, token}) => ({
        ...state,
        isAuthenticated: true,
        user,
        token,
        error: null,
    })),
    on(loginFailure,(state, {error}) => ({
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        error, 
    })),
    on(logout, state => initialState),
    on(setUser, (state, {user}) => ({...state, user})),
);