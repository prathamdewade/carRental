import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { PartnerComponent } from './component/partner/partner.component';
import { ServicesComponent } from './component/services/services.component';
import { BookingComponent } from './component/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  {HttpClientModule} from '@angular/common/http';
import { UserIndexComponent } from './component/user-index/user-index.component'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PartnerComponent,
    ServicesComponent,
    BookingComponent,
    UserIndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
