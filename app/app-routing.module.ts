import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/logins/login/login.component';
import { SignUpComponent } from './components/logins/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/logins/forgot-password/forgot-password.component';
import { HelpLineComponent } from './services/help-line/help-line.component';
import { MyOrdersComponent } from './components/orders/my-orders/my-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderFormComponent } from './components/orders/order-form/order-form.component';
import { PaymentComponent } from './components/orders/payment/payment.component';
import { AdminMenuComponent } from './components/menu/admin-menu/admin-menu.component';
import { ItemsComponent } from './components/menu/items/items.component';
import { OrderSuccessComponent } from './components/orders/order-success/order-success.component';
const routes: Routes = [
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'help', component: HelpLineComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'user-menu', component: ItemsComponent },
  { path: 'menu', component: ItemsComponent },
  { path: 'confirm',component:OrderSuccessComponent},
  { path: 'checkout', component: PaymentComponent },
  { path : 'admin-menu' ,component:AdminMenuComponent},
  { path: 'order-form', component: OrderFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
