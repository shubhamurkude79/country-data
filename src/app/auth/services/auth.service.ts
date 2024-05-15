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

    login(email:string, password:string): Observable<{user:User, token:string}> {
        return this.http.post<{user:User, token:string}>(`${loginSysUrl}/login`, {email, password});
    }

    register(name:string, email:string, password:string): Observable<{registrationData:RegistrationData}> {
        return this.http.post<{registrationData:RegistrationData}>(`${loginSysUrl}/register`, {name, email, password});

    }
}