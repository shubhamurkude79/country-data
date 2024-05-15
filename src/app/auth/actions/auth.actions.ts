import { createAction, props } from "@ngrx/store";
import { User, RegistrationData } from "../models/auth.model";

export const login = createAction('[Auth] Login', props<{email:string, password:string}>());
export const loginSuccess = createAction('[Auth] Login Success', props<{user:User, token:string}>());
export const loginFailure = createAction('[Auth] Login Failure', props<{error:any}>());
export const register = createAction('[Auth] Register', props<{name:string, email:string, password:string}>());
export const registerSuccess = createAction('[Auth] Register Success');
export const registerFailure = createAction('[Auth] Register Failure', props<{error:any}>());
export const logout = createAction('[Auth] Logout');
export const setUser = createAction('[Auth] Set User', props<{user:User}>());