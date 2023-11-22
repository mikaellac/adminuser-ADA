import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export function authenticationGuard(): CanActivateFn {
  return () => {
    console.log("authenticationGuard")
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);
    if (authService.isUserLoggedIn) return true
    router.navigate(["/login"])
    return false
  };
}
