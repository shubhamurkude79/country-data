import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { login, register } from '../../actions/auth.actions';
import { AuthState } from '../../reducers/auth.reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegistering: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private store: Store<{ auth: AuthState }>,
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.isRegistering && this.registerForm.valid){
      const {name, email, password} = this.registerForm.value;
      this.store.dispatch(register({name, email, password}));
      this.registerForm.reset();
    } else if(this.loginForm.valid){
      const {email, password} = this.loginForm.value;
      this.store.dispatch(login({ email, password }));
      this.loginForm.reset();
    }
  }

  toggleRegistration() {
    this.isRegistering = !this.isRegistering;
    if (this.isRegistering) {
      this.registerForm.reset();
    } else {
      this.loginForm.reset();
    }
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
  }

  isFormValid(): boolean {
    return this.isRegistering ? this.registerForm.valid : this.loginForm.valid;
  }

}
