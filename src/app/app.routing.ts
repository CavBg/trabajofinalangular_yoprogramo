// app.routing.ts
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const appRoutes = [
  { path: 'login', component: LoginComponent},
];
export const routing = RouterModule.forRoot(appRoutes);