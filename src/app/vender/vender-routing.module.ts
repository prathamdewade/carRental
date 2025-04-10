import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarUploadComponent } from './car-upload/car-upload.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ViewCarComponent } from './view-car/view-car.component';

const routes: Routes = [
  {path:'uploadcar',component:CarUploadComponent},
  {path:'caredit',component:EditCarComponent},
  {path:'viewcar',component:ViewCarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenderRoutingModule { }
