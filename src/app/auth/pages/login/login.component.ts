import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Store } from '@ngrx/store';
import { login, register } from '../../actions/auth.actions';
import { AuthState } from '../../reducers/auth.reducers';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegistering: boolean = false;
  socialUser: SocialUser | undefined;

  constructor(
    private fb: FormBuilder, 
    private store: Store<{ auth: AuthState }>,
    private authService: SocialAuthService
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

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.socialUser = user;
      if(user){
        this.store.dispatch(login({email: user.email, password: user.idToken}));
      }
    });
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: this.handleCredentialResponse.bind(this)
    });

    const googleSignInButton = document.getElementById('google-signin-button');
    if (googleSignInButton) {
      google.accounts.id.renderButton(googleSignInButton, {
        theme: 'outline',
        size: 'large'
      });
    } else {
      console.error('Google Sign-In button element not found');
    }
  }

  handleCredentialResponse(response: any): void {
    console.log(response);
    // Handle the response and dispatch login action
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

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
