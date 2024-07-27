import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { VideosComponent } from './videos/videos.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ImprintComponent } from './imprint/imprint.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'login/:activation-token', component: LoginComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'videos', component: VideosComponent},
    {path: 'forgot-password', component: ForgotPasswordComponent},
    {path: 'reset-password/:reset-token', component: ResetPasswordComponent},
    {path: 'imprint', component: ImprintComponent},
];
