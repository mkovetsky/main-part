import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthenticationService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>('/api/authenticate', { email: email, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.loggedIn.next(true);
                }

                return user;
            });
    }

    get isLoggedIn() {
        this.loggedIn.next(false);
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.loggedIn.next(true);
        }
        return this.loggedIn.asObservable();
    }

    logout() {
        this.loggedIn.next(false);
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
