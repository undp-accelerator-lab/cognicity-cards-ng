import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WindlocationRoutingModule } from './windlocation-routing.module';
import { WindlocationComponent } from './windlocation.component';
import { LocationPickerComponent } from '../../../components/location-picker/location-picker.component';

@NgModule({
  declarations: [WindlocationComponent, LocationPickerComponent],
  imports: [
    CommonModule,
    WindlocationRoutingModule
  ]
})
export class WindlocationModule { }
