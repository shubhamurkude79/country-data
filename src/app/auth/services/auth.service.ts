import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { User, RegistrationData } from "../models/auth.model";

const loginSysUrl = environment.loginSysUrl;

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor(private http: HttpClient) {}

    login(username:string, password:string): Observable<{user:User, token:string}> {
        return this.http.post<{user:User, token:string}>(`${loginSysUrl}/login`, {username, password});
    }

    register(registrationData:RegistrationData): Observable<{registrationData:RegistrationData}> {
        return this.http.post<{registrationData:RegistrationData, token: string}>(`${loginSysUrl}/register`, registrationData);

    }
}