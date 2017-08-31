import {Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainMessageScreenComponent } from './main-message-screen/main-message-screen.component';

export const ROUTES: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'main', component: MainMessageScreenComponent },
  { path: '', component: LoginComponent },
  { path: '**', component: LoginComponent },
];


