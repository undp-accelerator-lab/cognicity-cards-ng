import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card route components
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

// Child components
import { LocationPickerComponent } from '../../../components/location-picker/location-picker.component';

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule
  ],
  declarations: [
    LocationComponent,
    LocationPickerComponent
  ]
})
export class LocationModule { }
