import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccessDeniedGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const queryParams = route.queryParams;

    if (queryParams['error'] === 'access_denied') {
      this.router.navigate(['/access-denied']);
      return false;
    }

    return true;
  }
}
