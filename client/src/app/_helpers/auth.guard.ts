import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { authService } from '@app/_services/authService';

@Injectable({ providedIn: 'root' })
export class authGuard implements CanActivate {
    constructor(
        private router: Router,
        private authService: authService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.authService.userValue;
        if (user) {
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/']);
        return false;
    }
}