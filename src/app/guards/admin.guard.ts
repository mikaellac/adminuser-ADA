import {CanActivateFn} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";

export const adminGuard = (): CanActivateFn => {

  return () => {
    const authService: AuthService = inject(AuthService);
    const user = authService.loggedUser
    return !!(user && user.role === "admin");
  }
}
