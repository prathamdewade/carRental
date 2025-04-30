import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PartnerComponent } from './component/partner/partner.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { ServicesComponent } from './component/services/services.component';
import { BookingComponent } from './component/booking/booking.component';
import { UserIndexComponent } from './component/user-index/user-index.component';
import { loginAuthGuard } from './gaurd/login-auth.guard';
import { CarDataComponent } from './component/car-data/car-data.component';
import { BookingConfirmationComponent } from './component/booking-confirmation/booking-confirmation.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent },
  {path:'contact',component:ContactComponent},
  {path:'partner',component:PartnerComponent},
  {path:'services',component:ServicesComponent},
  {path: 'booking/:id', component:BookingComponent},
  {path:'user-index',component:UserIndexComponent },
  {path: 'car-data/:id', component:CarDataComponent},
  {path:'booking',component:BookingComponent},
  {path:'booking-conformation',component:BookingConfirmationComponent},
  {path: 'auth' ,loadChildren:()=>import('./auth/auth.module') .then(m=>m.AuthModule) },
  {path: 'vender' ,loadChildren:()=>import('./vender/vender.module') .then(m=>m.VenderModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
