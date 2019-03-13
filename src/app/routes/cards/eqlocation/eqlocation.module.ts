import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EqlocationRoutingModule } from './eqlocation-routing.module';
import { EqlocationComponent } from './eqlocation.component';
import { LocationPickerComponent } from '../../../components/location-picker/location-picker.component';

@NgModule({
  imports: [
    CommonModule,
    EqlocationRoutingModule
  ],
  declarations: [
    EqlocationComponent, 
    LocationPickerComponent,
  ]
})
export class EqlocationModule { }
