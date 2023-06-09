import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  // Data conatiners
  token = new Subject<any>()
  setToken(newValue: any){
    this.token.next(newValue)
  }
  user = new Subject<any>()
  setUser(newValue: any){
    this.user.next(newValue)
  }


  // Local storage
  getLocalToken(): string | null {
    const item = window.localStorage.getItem("token");
    this.setToken(item)
    return item
  }
  setLocalToken(value: string) {
    window.localStorage.setItem("token", value);
  }
  removeLocalToken() {
    window.localStorage.removeItem("token");
  }

  getLocalUser(): string | null {
    let item = window.localStorage.getItem("user") || '';
    if(item != ''){
      item = JSON.parse(item)
      this.setUser(item)
    }
    return item
  }
  setLocalUser(value: string) {
    window.localStorage.setItem("user", value);
  }
  removeLocalUser() {
    window.localStorage.removeItem("user");
  }


  clear() {
    window.localStorage.clear();
  }
}
