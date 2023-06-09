import { Component, OnInit } from '@angular/core';

import { HomeService } from '../data-access/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '../../app.component.css'
  ]
})
export class HomeComponent implements OnInit {

  constructor(
  ) { }

  ngOnInit(): void {
  }

  // menu bar
  menuSignInRoute : any = "/auth/login"
  menuButtonText: any = "Sign in"

  // Subscriptions 
  homeData: any = 'Welcome message.'

}
