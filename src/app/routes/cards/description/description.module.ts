import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Card route components
import { DescriptionRoutingModule } from './description-routing.module';
import { DescriptionComponent } from './description.component';

// Child components
import { TextBoxComponent } from '../../../components/text-box/text-box.component';

@NgModule({
  imports: [
    CommonModule,
    DescriptionRoutingModule
  ],
  declarations: [
    DescriptionComponent,
    TextBoxComponent
  ]
})
export class DescriptionModule { }
