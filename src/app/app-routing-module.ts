import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthenticationService } from "./services/authentication.service";
import { HomeComponent } from "./home/home.component";

//Broke fix later.
export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
  return inject(AuthenticationService).checkLogin();
}


export const routes: Routes = [
  { path: '', component: LoginComponent },

  // home route protected by auth guard
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
