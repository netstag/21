import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import all components
import { Home } from './home/home';
import { Login } from './login/login';
import { Registration } from './registration/registration';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'register' },
  {path:'register' , component:Registration},
  {path:'login' , component:Login},
  {path:'home' , component:Home},
  { path: '**', redirectTo: 'register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
