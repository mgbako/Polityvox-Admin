import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth-guard.service';

import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProcessPurchasePageComponent } from './pages/process-purchase-page/process-purchase-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PromotionPageComponent } from './pages/promotion-page/promotion-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomePageComponent, /* canActivate: [AuthGuard] */ },
  { path: 'process', component: ProcessPurchasePageComponent, /* canActivate: [AuthGuard] */ },
  { path: 'profile', component: ProfilePageComponent, /* canActivate: [AuthGuard] */ },
  { path: 'promotion', component: PromotionPageComponent, /* canActivate: [AuthGuard] */ }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes, {enableTracing: true})]
})

export class AppRoutingModule {}
