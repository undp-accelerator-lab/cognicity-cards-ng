import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card route components
import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';

// Child components
import { LocationPickerComponent } from '../../../components/location-picker/location-picker.component';
// import { SearchLocationComponent } from '../../../components/search-location/search-location.component';
import { FormsModule } from '@angular/forms';
import { LocationModule as LModule } from '../location.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    LocationRoutingModule,
    FormsModule,
    LModule,
    TranslateModule
  ],
  declarations: [
    LocationComponent,
    LocationPickerComponent,
    // SearchLocationComponent
  ],
  exports: [
    TranslateModule
  ],
  providers: [
    TranslatePipe
  ]
})
export class LocationModule { }
