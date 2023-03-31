import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './auth.service';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent  {


  signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])')])
  });



  constructor(
    private authService: AuthService,
    private http: HttpClient
    ) {}

  ngOnInit(): void {
    console.log(typeof(this.signInForm));
  }

  private baseUrl = 'http://192.168.56.107:3000';
  private tokenSubject = new BehaviorSubject<string>("");


  signIn(email: string, password: string): Observable<string> {
    const url = `${this.baseUrl}/signin`;
    const body = { email, password };
    return this.http.post<{ token: string }>(url, body).pipe(
      tap(res => this.tokenSubject.next(res.token)),
      map(res => res.token)
    );
  }

  getToken(): string {
    return this.tokenSubject.value;
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  signOut(): void {
    this.tokenSubject.next("");
  }

  onSubmit(): void {
    if (this.signInForm.valid) {
      const email = this.signInForm.value.email;
      const password = this.signInForm.value.password;
      this.signIn(email, password).subscribe(
        (token: string) => {
          // save to localstorage
        },
        (error: string) => {
          // error display
        }
      );
    }
  }
}
