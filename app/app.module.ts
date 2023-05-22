import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ForgotPasswordComponent } from './components/logins/forgot-password/forgot-password.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/logins/login/login.component';
import { HeaderComponent } from './components/h-f/header/header.component';
import { FooterComponent } from './components/h-f/footer/footer.component';
import { SignUpComponent } from './components/logins/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { MyOrdersComponent } from './components/orders/my-orders/my-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { HelpLineComponent } from './services/help-line/help-line.component';
import { UserMenuComponent } from './components/menu/user-menu/user-menu.component';
import { ItemsComponent } from './components/menu/items/items.component';
import { PaymentComponent } from './components/orders/payment/payment.component';
import { OrderHeaderComponent } from './components/orders/order-header/order-header.component';
import { OrderSuccessComponent } from './components/orders/order-success/order-success.component';
import { AdminMenuComponent } from './components/menu/admin-menu/admin-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserMenuComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    HomeComponent,
    AdminMenuComponent,
    OrderFormComponent,
    MyOrdersComponent,
    CartComponent,
    HelpLineComponent,
    ItemsComponent,
    PaymentComponent,
    OrderHeaderComponent,
    OrderSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
