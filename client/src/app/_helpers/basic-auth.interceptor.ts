import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@environments/environments';
import { authService } from '@app/_services/authService';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: authService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem('user'); // or however you store your auth token
        console.log(authToken);
        const tokenValue  = authToken!.replace(/"/g, '');
        console.log(this.authenticationService.userValue);


        if (authToken) {
          const authReq = req.clone({  
            headers: req.headers.set('Authorization', `Bearer ${this.authenticationService.userValue}`)

          });
          return next.handle(authReq);
        } else {
          return next.handle(req);
        }
      }


}
