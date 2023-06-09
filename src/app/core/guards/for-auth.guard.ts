import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/shared/storage/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ForAuthGuard implements CanActivate {
  constructor(
    private storageService: StorageService,
    private router: Router,
  ) { }
  
  singInUrl = '/auth/login'
  authUser = 'authUser'

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.storageService.getLocalToken()){
      this.router.navigate([this.singInUrl])
      return false;
    }else {
      return true;
    }
  }


  
}
