import { ChangeDetectionStrategy, Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-auth-login-page',
  templateUrl: './auth-login-page.component.html',
  styleUrls: [
    './auth-login-page.component.css',
    '../../../app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLoginPageComponent implements OnInit {
  
  constructor(
    private rootFormGroup: FormGroupDirective
    ) { }
    
    ngOnInit(): void {
      this.signInForm = this.rootFormGroup.control;
    }
  
  // Sign in
  signInForm: any;
  @Output("signInOnSubmit") signInOnSubmit: EventEmitter<any> = new EventEmitter()

  // Password show/hide toogle
  showPassword: boolean = false;
  togglePassword(item:any){
    if(item == 'password'){
      this.showPassword = !this.showPassword
    }
  }

}
