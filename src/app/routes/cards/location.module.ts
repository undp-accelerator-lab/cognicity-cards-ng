import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SearchLocationComponent } from "../../components/search-location/search-location.component";

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    SearchLocationComponent
  ],
  exports: [
    SearchLocationComponent
  ]
})
export class LocationModule {}