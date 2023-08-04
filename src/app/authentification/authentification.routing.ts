import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CallbackComponent } from './callback/callback.component';
import { AuthentificationModule } from './authentification.module';

const routes: Routes = [{
  path:'',
  redirectTo:'login',
  pathMatch:'full'
},
  {
    path:'login',
    component: LoginComponent
   },
   {
    path:'callback',
    component: CallbackComponent
   }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes)
  ]
})
export class AuthentificationRootingModule {
}
