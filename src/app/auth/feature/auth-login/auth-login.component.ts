import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from '../../data-access/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: [
    './auth-login.component.css',
    '../../../app.component.css'
  ]
})
export class AuthLoginComponent implements OnInit {
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
    ) { }
    
    
  ngOnInit(): void {
    this.signInForm = this.formBuilder.group({
      identifier: '',
      password: ''
    });
  }
    
  // Menu
  menuCancelRoute : any = "/"
  menuButtonText: any = "Cancel"
    
  // Sign in
  signInForm: any;
  signInOnSubmit(): void {
    const payload = this.signInForm.value
    console.log('Dane z formularza logowania: ', payload);
    this.authService.postSignIn(payload)
    this.signInForm.reset();
  }

}
