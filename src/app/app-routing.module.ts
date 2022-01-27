import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
// import { SellerhomeComponent } from './sellerhome/sellerhome.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { RoleguardGuard } from './guard/roleguard.guard';


const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  // {path:'home', loadChildren:()=> import("../app/home/home.component").then(m=>m.HomeComponent), canActivate:[AuthService]},
  
  // {path:'sellerhome', component:SellerhomeComponent, canActivate:[AuthguardGuard, RoleguardGuard], data:{expectedRoles:['seller']}},
  // {path:'userhome', component:UserhomeComponent, canActivate:[AuthguardGuard,RoleguardGuard],data:{expectedRoles:['user']}},
  {path:'userdash', loadChildren:()=> import("../app/userdash/userdash.module").then(m=>m.UserdashModule)},
  { path: 'sellerdash', loadChildren: () => import('./sellerdash/sellerdash.module').then(m => m.SellerdashModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule ]
})
export class AppRoutingModule { }
