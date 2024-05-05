import { createAction, props } from "@ngrx/store";
import { User } from "../models/auth.model";

export const login = createAction('[Auth] Login', props<{username:string, password:string}>());
export const loginSuccess = createAction('[Auth] Login Success', props<{user:User, token:string}>());
export const loginFailure = createAction('[Auth] Login Failure', props<{error:any}>());
export const logout = createAction('[Auth] Logout');
export const setUser = createAction('[Auth] Set User', props<{user:User}>());