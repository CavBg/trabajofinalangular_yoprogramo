// src/app/users/users.service.ts

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  getUsers() {
    // throw new Error('Method not implemented.');
    return this.http.get("https://reqres.in/api/login");
  }
  constructor(private http: HttpClient, private cookies: CookieService) {

    console.log('servicio HTTP');
  }
  login(user: any): Observable<any> {
    return this.http.post("https://reqres.in/api/login", user);
  }
  setToken(token: string) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }
}