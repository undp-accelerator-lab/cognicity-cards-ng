import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { SearchLocationComponent } from "../../components/search-location/search-location.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SearchLocationComponent
  ],
  exports: [
    SearchLocationComponent
  ]
})
export class LocationModule {}
