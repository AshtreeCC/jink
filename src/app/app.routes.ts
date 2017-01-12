//angular
import { Routes }             from '@angular/router';

//app
import { LoginComponent }     from './pages/login/login.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent }
];
