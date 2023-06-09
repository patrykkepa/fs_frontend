import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { StorageService } from 'src/app/shared/storage/storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router,
    private storageService: StorageService
  ) { }

  // Strapi enpoints
  postSingInUrl = "/api/auth/local"
  authUser = 'example'

  // API REQUESTS
  postSignIn(payload: any){
    this.http.post(this.postSingInUrl, payload)
    .subscribe(resp => {
      console.log(resp)
      let res = JSON.parse(JSON.stringify(resp))
      if(Object.keys(res).length != 0){
        this.storageService.setLocalToken(res['jwt'])
        this.storageService.setLocalUser(JSON.stringify(res['user']))
        this.router.navigateByUrl(this.authUser)
      }else{
        this.storageService.setLocalToken('')
        this.storageService.setLocalUser('')
      }
    },
    (error) => {
      console.log(error)
    })
  }
}
