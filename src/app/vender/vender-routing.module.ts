import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarUploadComponent } from './car-upload/car-upload.component';
import { EditCarComponent } from './edit-car/edit-car.component';
import { ViewCarComponent } from './view-car/view-car.component';

const routes: Routes = [
  {path:'add',component:CarUploadComponent},
  {path:'edit',component:EditCarComponent},
  {path:'view',component:ViewCarComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VenderRoutingModule { }
