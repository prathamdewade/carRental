import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VenderRoutingModule } from './vender-routing.module';
import { CarUploadComponent } from './car-upload/car-upload.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ViewCarComponent } from './view-car/view-car.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarUploadComponent,
    EditCarComponent,
    ViewCarComponent,
   
  ],
  imports: [
    CommonModule,
    VenderRoutingModule,
    FormsModule
  ]
})
export class VenderModule { }
