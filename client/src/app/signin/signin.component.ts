import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';

import { authService } from '@app/_services/authService';

@Component({
  selector: 'app-sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent  {
    signInForm: FormGroup = new FormGroup({
        email: new FormControl('admin@sample.com', [Validators.required, Validators.email]),
        password: new FormControl('#admIN99', [Validators.required, Validators.minLength(8), Validators.maxLength(20), Validators.pattern('(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$')])
      });
  loading = false;
  submitted = false;
  error = '';
  loginText : string = "Sign in"

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authService: authService
  ) {
      // redirect to home if already logged in
      if (this.authService.userValue) {
          this.router.navigate(['/dashboard']);
      }
  }

  ngOnInit() {
    //   this.signInForm = this.formBuilder.group({
    //       email: ['', Validators.required],
    //       password: ['', Validators.required]
    //   });
    //   console.log("asdasdsad");


  }

  // convenience getter for easy access to form fields
  get form() { return this.signInForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.signInForm.invalid) {
          return;
      }

      this.error = '';
      this.loading = true;
      this.authService.login(this.form.email.value, this.form.password.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // get return url from route parameters or default to '/'
                  // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  this.router.navigate(["dashboard"]);
              },
              error: error => {
                  this.error = error;
                  this.loading = false;
              }
          });
  }
}
