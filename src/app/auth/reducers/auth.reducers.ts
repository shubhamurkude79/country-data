import { createReducer, on } from "@ngrx/store";
import { login, loginSuccess, loginFailure, logout, setUser } from "../actions/auth.actions";
import { User, RegistrationData } from "../models/auth.model";
import {  register, registerSuccess, registerFailure } from "../actions/auth.actions";

export interface AuthState {
    isAuthenticated: boolean;
    user: User | RegistrationData | null;
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
    // Handle registration actions
    on(registerSuccess, state => ({
        ...state,
        error: null, // Reset error on successful registration
    })),
    on(registerFailure, (state, { error }) => ({
        ...state,
        error,
    }))
);