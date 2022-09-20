// app.routing.ts
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WebComponent } from './web/web.component';

const appRoutes = [
  { path: 'login', component: LoginComponent,children: [
    { path: ':id', component: LoginComponent },
    
  ]
  },
  { path: 'web', component:WebComponent, children: [
    { path: ':id', component: WebComponent },
  ]}
];
export const routing = RouterModule.forRoot(appRoutes);