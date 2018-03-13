import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


// External Resources
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FlashMessagesModule } from 'angular2-flash-messages';

// Sevices
import { AuthService } from './services/auth.service';
import { HttpService } from './services/http.service';
import { AuthGuard } from './auth-guard.service';
import { CustomerService } from './services/customer.service';
import { AlertService } from './services/alert.service';

// Components
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './menu/sidebar/sidebar.component';
import { TopbarComponent } from './menu/topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProcessPurchasePageComponent } from './pages/process-purchase-page/process-purchase-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { PromotionPageComponent } from './pages/promotion-page/promotion-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    RightSidebarComponent,
    HomePageComponent,
    ProcessPurchasePageComponent,
    ProfilePageComponent,
    PromotionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    FlashMessagesModule.forRoot(),
  ],
  providers: [AuthService, AuthGuard, HttpService, CustomerService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
