import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import moment from 'moment';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }


  login(username:string, password:string ) {
    return this.http.post<any>('https://www.bilimkahramanlari.org/admin_new/api/v1/auth', {username, password});
  }


  private setSession(authResult) {
        console.log("setSession Called"+ authResult);
        const expiresAt = moment().add(authResult.expires,'second');

        localStorage.setItem('token', authResult.token);
        localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
    }

  logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("expires_at");
    }

    public isLoggedIn() {
        return moment().isBefore(this.getExpiration());
    }

    isLoggedOut() {
        return !this.isLoggedIn();
    }

    getExpiration() {
        const expiration = localStorage.getItem("expires_at");
        const expiresAt = JSON.parse(expiration);
        return moment(expiresAt);
    }    
}