import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environments';
import { User } from '@app/_models/user';

@Injectable({ providedIn: 'root' })
export class authService {
    private userSubject: BehaviorSubject<User | null>;
    public user: Observable<User | null>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
        this.user = this.userSubject.asObservable();

    }

    public get userValue() {
        return this.userSubject.value;
    }

    login(email: string, password: string) {
        console.log(this.userSubject.value);
        
        return this.http.post<any>(`${environment.apiUrl}/signin`, { email, password })
            .pipe(map(userToken => {
                // store user details and basic auth credentials in local storage to keep user logged in between page refreshes
                userToken.authdata = window.btoa(email + ':' + password);

                localStorage.setItem('user', JSON.stringify(userToken.token));
                this.userSubject.next(userToken);
                return userToken;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/']);
    }
}
