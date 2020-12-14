import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeatcherGuard implements CanActivate, CanActivateChild {

  constructor(private _authService: AuthService,
    private _router: Router){}

  canActivate(): boolean{
    if(this._authService.isTeatcher())
      return true
    else{
      this._router.navigate(['/login'])
      return false
    }
  }
  canActivateChild(){
    return this.canActivate();
  }
  
}
