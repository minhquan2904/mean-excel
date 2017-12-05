import { Routes,RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuard } from './_guards/index';
import { LoginComponent } from './login/login.component';
import { AddFileComponent } from './admin/add-file/add-file.component';
const appRoutes: Routes = [
    { path: '',pathMatch: 'full' , component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'add-file', component: AddFileComponent},
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
  ];
  
export const routing = RouterModule.forRoot(appRoutes);